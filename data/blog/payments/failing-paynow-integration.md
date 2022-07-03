---
title: Is your Paynow integration failing? Here is how to fix it
date: '2022-07-03'
tags: ['Paynow', 'Payments', 'Integration']
draft: false
summary: Sometimes your integration may not always work out of the box. Here are some tips to help you fix it.
images: ['/static/images/paynow-failing.jpg']
layout: PostLayout
readTime: '4 minute read'
---


You have just made your first Paynow integration but you are not receiving that Paynow Popup. 

You start debugging using `print_r, echo, dd` and `print` statements only to discover this message:

```python
"The integration ID specified is currently in test mode. The authemail used must belong to the company in control of the integration ID."
```


## So how do we fix this 

You have to do the following steps

1. Make a test transaction.
2. Request to be set live.
3. Wait for Paynow response.
4. Start accepting live payments.

### 1. Make a test transaction.

Paynow has test numbers which you can use to make fake transactions:

`Success – 0771111111`

Paynow will send a SUCCESS status update message 5 seconds after the transaction is initiated.

`Delayed Success – 0772222222`

Paynow will send a SUCCESS status update message 30 seconds after the transaction is initiated. This simulates the user taking a longer than normal amount of time to authorize the transaction from their handset

`User Cancelled – 0773333333`

Paynow will send a FAILED status update message 30 seconds after the transaction is initiated. This simulates the user cancelling the mobile money transaction.

`Insufficient Balance – 0774444444`

Paynow will immediately fail the transaction during initiation and return an “Insufficient balance” error message.


**For number** use one of the number mentioned above e.g `0771111111`

**For authemail** use the email that you used to register for Paynow e.g `joshua@example.com`

**Now make a test transaction**

For PHP users:
```php
$payment = $paynow->createPayment('Order #123', 'joshua@example.com');
...
...
...

$response = $paynow->sendMobile($payment, "0771111111", "ecocash");
```

For Python generals:
```python
payment = paynow.create_payment('Order #123', 'joshua@example.com')
...
...
...
response = paynow.send_mobile(payment, '0771111111', 'ecocash')
```


You will get this message in your email:

```
Paynow Reference: XXXXXXXX
Status: Paid (TESTING: Faked Success)
Customer Email: joshua@example.com
Customer Name: Test Customer
Customer Phone: 263772222222
Amount: $200.00
Reference: Order #123
```

Once you have done  this then you can request it to be set live

### 2. Request to be set live

- Log in to Paynow (paynow.co.zw)
- Go to `Recieve Payments`
- Click `Other Ways To Get Paid`
- Scroll down an click `Create/Manage Shopping Carts`
- Scroll down again and click `Advanced Integration`(If you don't have an integration) or click a `Pencil` icon on your right.

![Select your integration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a5xkeiezfvokxrp6ou5l.png)


- Now scroll down and click `Request to be Set Live`

![Request to be Set Live](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u3jmhsqhzchhnvueqzlo.png)

### 3. Wait for Paynow response.

Now you wait

![You waiting for response](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0y2w4t3b06xkz2q8z7nv.jpg)

The time it takes to get your response is not personal 😂😂😂 and it should not take more than 3 days.

If it comes you will get *"You integration has been set to live"* message or something within these lines or some error message,. Basically error message come because you have skipped something.

### 4. Start accepting live payments.

Once live I love to test it again with small amounts just to make sure, You can test it on different platforms so you can get the feel of it.

Ok until we meet next time...

Image Credits:
SecurionPay


