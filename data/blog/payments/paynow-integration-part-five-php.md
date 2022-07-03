---
title: Paynow Integration Part 5a - Checking for payments
date: '2022-07-03'
tags: ['Paynow', 'Payments', 'Integration']
draft: false
summary: If you don't check and verify your payments your customers can buy things for free from you.(PHP)
images: ['/static/images/paynow-intro.jpg']
layout: PostLayout
readTime: '4 minute read'
---


Once you have requested for a transaction to take place the next steps includes

- Checking transaction status
- Taking the correct action(giving or denying access)

In this tutorial we check if Paynow transaction has succeeded they can the correct action.

## Checking if transaction is taking place

In the last part we send a transaction to Paynow and Paynow did send a dialog to our customer.

So to check if that succeeded we use this code:

```php
if($response->success()) {
    // Check if payment is successful
}
```

If its `true` then it mean the transaction is taking place!

## Checking if transaction is successful

Now lets check if the user paid 

```php
if($response->success()) {
    $pollUrl = $response->pollUrl();

    // Check the status of the transaction
    $status = $paynow->pollTransaction($pollUrl);

    if($status->paid()) {
        // Yay! Transaction was paid for
    } else {
        // No! It wasn't paid for
    }
}
```

So the first thing is getting a poll URL
```php 
$pollUrl = $response->pollUrl();
```
Then use that URL to get the status of the payment

```php
$status = $paynow->pollTransaction($pollUrl);
```

Then you check the status

```php
if($status->paid()) {
    // Some success code here
}else{
    // Some fail code here
}
```

**This is theoretically correct but practically wrong because a real world mobile transaction can take from 8 seconds to 30 seconds.**

The user has to put pin, verify if its correct then press accept, by then the code above who have announced it as a failed transaction.

So we must give some kind of grace period to the transaction checking process. To do that we use a loop plus sleep function.

```php
$timeout = 9;
$count = 0;

while(true){
   sleep(3);

   //Check if paid
   if($status->paid()){
         // Yay! Transaction was paid for
   }
        
   $count++;

   if ($count > $timeout){
       // Timeout reached
    }

}
```

## Complete Code

So the whole code from part 1 to this part will look like this:

```php
<?php


$phone = $_POST["phone_number"]; // Sanitize data
$platform = "";

$user_email = filter_var($_POST['user_email'], FILTER_SANITIZE_EMAIL);
$invoice_name = "Invoice " . time();

$cart_id = $_POST['cart_id'];   // Sanitize id
$products = $this->get_cart_products($cart_id);


// Initialize Paynow
$paynow = new Paynow\Payments\Paynow(
    'INTEGRATION_ID',
    'INTEGRATION_KEY',
    'http://example.com/gateways/paynow/update',
    'http://example.com/return?gateway=paynow'
);

// Create Payments
$invoice_name = "Invoice " . time();
$payment = $paynow->createPayment($invoice_name, $user_email);

// Add some products
foreach($products as $product){
     $payment->add($product->name, $product->price);
}

// Detect platform and send payment
if(str_starts_with($phone, '071')){
     $platform= "onemoney";
}else if(str_starts_with($phone, '073')){
    $platform = "telecash";
}else{
    $platform = "ecocash";
}

$response = $paynow->sendMobile($payment, $phone, $platform);

// Check transaction success
if($response->success()) {
    // Get transaction poll URL
    $pollUrl = $response->pollUrl();

    

     $timeout = 9;
     $count = 0;

     while(true){
         sleep(3);
         // Get the status of the transaction
         $status = $paynow->pollTransaction($pollUrl);



         //Check if paid
         if($status->paid()){
           // Yay! Transaction was paid for
           // Save transactions to database and grant access
          }
        
          $count++;

          if ($count > $timeout){
             // Timeout reached
           }
      }
}

// Transaction failed
```

So that's it guys, go ahead and get paid, enjoy the rest of the week.

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oe6jv0oiagy35e3vqti9.png)
 