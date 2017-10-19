# S3 Bucket Name Validator

Follows official latest rules [published here](http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html). Implementation stolen from [Serverless](https://github.com/serverless/serverless)

## Install

```sh
$ yarn add s3-bucket-name-validator
```

## Usage

```js
const validateS3BucketName = require('s3-bucket-name-validator');

validateS3BucketName('-invalid.name');
// { isValid: false, error: 'Bucket name must start with a letter or number. -invalid.name' }

validateS3BucketName('1.this.is.valid.2');
// { isValid: true, error: '' }
```
 