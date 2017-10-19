# S3 Bucket Name Validator

Follows official latest rules [published here](http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html). Implementation stolen from [Serverless](https://github.com/serverless/serverless)

## Install

```sh
$ yarn add s3-bucket-name-validator
```

## Usage

```js
const validateS3BucketName = require('s3-bucket-name-validator');

// Returns error string with reason if invalid. Empty string otherwise

const bucketNameError = validateS3BucketName('-invalid.name'); // 'Bucket name must start with a letter or number. -invalid.name'
if (bucketNameError) {
  // ... some logic
}

validateS3BucketName('1.this.is.valid.2'); // ''
```
