const validateS3BucketName = require('.');

it('should export validateS3BucketName function', () => {
  expect(validateS3BucketName).toBeInstanceOf(Function);
});

describe('returns error', () => {
  it('is empty string', () => {
    expect(validateS3BucketName('')).toEqual('Bucket name cannot be undefined or empty');
  });

  it('is not a string', () => {
    expect(validateS3BucketName(1)).toEqual('Bucket name cannot be undefined or empty');
  });
});

describe('returns nothing', () => {
  it('is a valid bucket name', () => {
    expect(validateS3BucketName('1.this.is.valid.2')).toEqual('');
  });
});
