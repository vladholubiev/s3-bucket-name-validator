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

## Reference

This code was grabbed from AWS S3 front-end

<details>
  <summary>Click to expand obfuscated code 😰</summary>

  URL: [d3v76wtu1o9bby.cloudfront.net/js/s3_console_Prod.gz.js](https://d3v76wtu1o9bby.cloudfront.net/js/s3_console_Prod4fe24536a9e722105c18a8a473e27642d63c624b.gz.js)

  ```js
  this.isValidBucketName = function(D) {
      var B = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
      if (!D) {
          B.push(t.instant("createbucketmodal.validation.invalid.error"));
          return false
      }
      var F = "\0";
      var H = "";
      for (var C = 0; C < D.length; C++) {
          var E = D.charAt(C);
          var G = "";
          if (/[A-Z]/.test(E)) {
              var I = t.instant("createbucketmodal.validation.uppercase.error");
              if (B.indexOf(I) === -1) {
                  B.push(I)
              }
          }
          if (E === ".") {
              if (F === "\0") {
                  G = t.instant("createbucketmodal.validation.start.error")
              }
              if (F === ".") {
                  G = t.instant("createbucketmodal.validation.periods.error")
              }
              if (F === "-") {
                  G = t.instant("createbucketmodal.validation.dashperiod.error")
              }
          } else {
              if (E === "-") {
                  if (F === "\0") {
                      G = t.instant("createbucketmodal.validation.start.error")
                  }
                  if (F === ".") {
                      G = t.instant("createbucketmodal.validation.dashperiod.error")
                  }
              } else {
                  if (!/[a-z0-9]/.test(E) && H.indexOf(E) === -1) {
                      if (!/[A-Z]/.test(E)) {
                          H += E
                      }
                      if (F === "\0") {
                          G = t.instant("createbucketmodal.validation.start.error")
                      }
                  }
              }
          }
          if (G && B.indexOf(G) === -1) {
              B.push(G)
          }
          F = E
      }
      if (F === "." || F === "-") {
          B.push(t.instant("createbucketmodal.validation.end.error"))
      }
      if (H.length > 0) {
          B.push(t.instant("createbucketmodal.validation.badchars.error") + " '" + H + "'")
      }
      if (D.length < 3 || D.length > 63) {
          B.push(t.instant("createbucketmodal.validation.length.error"))
      }
      if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(D)) {
          B.push(t.instant("createbucketmodal.validation.ipaddress.error"))
      }
      return B.length === 0
  }
  ```
</details>
