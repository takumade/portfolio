---
title: Paynow Integration Part 4a - PHP Integration
date: '2022-07-03'
tags: ['Paynow', 'Payments', 'Integration']
draft: false
summary: So we have finished the boring part now lets integrate Paynow into our project(PHP).
images: ['/static/images/paynow-intro.jpg']
layout: PostLayout
readTime: '4 minute read'
---


So we finished the boring parts and today we are going to do the following
-  [Initialize Paynow](#sec-1)
-  [Adding Payment](#sec-2)
-  [Adding some products](#sec-3)
-  [Then sending payment to Paynow](#sec-4)

## 1. Initialize Paynow    <a name="sec-1"></a>

Before you can do anything you have to include PayNow and initialize it first

```php
// include paynow here
<?php
$paynow = new Paynow\Payments\Paynow(
    'INTEGRATION_ID',
    'INTEGRATION_KEY',
    'http://example.com/gateways/paynow/update',
    'http://example.com/return?gateway=paynow'
);
```

This creates a PayNow instance,  **your keys should be correct** or it will raise `Integration Exception` on checkout. Errors can be annoying.

## 2. Creating a payment   <a name="sec-2"></a>

The next stage involves adding a payment to the PayNow instance you have created:

```php
$invoice_name = "Invoice " . time();
$user_email = filter_var($_POST['user_email'], FILTER_SANITIZE_EMAIL);
$payment = $paynow->createPayment($invoice_name, $user_email);
```

This adds a payment to your instance you create in step 1. Once payment succeeds PayNow will send an email to the customer for transparence and reference purposes.

##3. Add some products     <a name="sec-3"></a>

If you have one product you can add it like this:

```php
$payment->add('Sadza and Beans', 1.25);
```

If you have more than one products then you can add them like this

```php
$products = [Object1, Object2, Object3, ...., Object10 ];

foreach($products as $product){
     $payment->add($product->name, $product->price);
}
```

If those products have quantities or amounts then it will be something like this

```php
$products = [Object1, Object2, Object3, ...., Object10 ];
$total = 0;
$tax = 0.01;

foreach($products as $product){
     $total = $product->price * $product->qty;
     $tax_amount = $total * $tax;
     $total = $tax_amount + $total;
     $payment->add($product->name, $product->price);
}
```

You could add things like coupons, discounts, promotions and what what but well I will leave that you.

## Sending payment to PayNow    <a name="sec-4"></a>

After adding payment the next stage is sending the payment to payment to PayNow

```php
$response = $paynow->sendMobile($payment, '077777777', 'ecocash');
```

Here were requesting for a mobile transaction to occur between our Paynow account and 0777777777 's Ecocash.

The number you get from user through forms or from database. The platform('ecocash') can be retrieved from user through forms or by auto detection

```php
$phone = "07777777";
$platform = ""
if(str_starts_with($phone, '071')){
     $platform= "onemoney";
}else if(str_starts_with($phone, '073')){
    $platform = "telecash";
}else{
    $platform = "ecocash";
}

// Then 
$response = $paynow->sendMobile($payment, $phone, $platform);
```

Your users will love this 😎😎😎

So this part alone should send a message to your customer mobile asking for payment:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hcnkp25o3fdfrd2jgj7f.jpg)

Of course there will be some small differences.

Ok that's it for this one in the next tutorial we will talk about checking payments.


![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2nza4jbux3awqyf39sy2.png)
 



