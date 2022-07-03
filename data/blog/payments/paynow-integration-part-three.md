---
title: Paynow Integration Part 3 - Installation
date: '2022-07-03'
tags: ['Paynow', 'Payments', 'Integration']
draft: false
summary: After getting the keys the next stage is to install Paynow library or SDK.
images: ['/static/images/blog/paynow-installation.png']
layout: PostLayout
readTime: '4 minute read'
---

In the last tutorial we got keys from Paynow, in this one we will go through installation of Paynow SDK or library in your project

Select your project type from below

# Project Type
1. [PHP Installation](#php-installation)
2. [Java Installation](#java-installation)
3. [JavaScript Installation](#javascript-installation)
4. [Python Installation](#python-installation)



## PHP Installation
I will touch on these scenarios:
- Composer
- Manual Installation

Also make sure curl extension is enabled in your PHP

### 1. Composer

Type the following command to install paynow php sdk
```sh
$ composer require paynow/php-sdk
```

Then include it in you project like this

```php
<?php
require_once 'path/to/vendor/autoload.php';
// your code here
```

If you are using Laravel include it like this

```php
<?php
use \Paynow\Payments\Paynow;
// your code here
```

Thats it!

### 2. Manual Installation
If you don't have composer installed then [Download Paynow Here](https://github.com/paynow/Paynow-PHP-SDK/archive/master.zip)

Extract it into your project directory then type this into your code

```php
<?php
require_once 'path/to/library/autoloader.php';
// Do stuff
```

### Example: Manual Installation
If your your folder structure is like this

```
- Paynow
- checkout.php
- success.php
- cart.php
```

Then you include Paynow like this(inside checkout.php)

```php
<?php
require_once './Paynow/autoloader.php';
```

## Java Installation

Coming Soon

## Javascript Installation

Coming Soon

## Python Installation

Coming Soon


And BAM you have access to Paynow!!!

Congratulations we have finished the boring stages now we move to the interesting stuff

![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kj7s46r45m1ytvqyp975.png)
 