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

  it('is shorter 3 chars', () => {
    expect(validateS3BucketName('ab')).toEqual('Bucket name is shorter than 3 characters. ab');
  });

  it('is longer 63 chars', () => {
    expect(validateS3BucketName('abcd'.repeat(20))).toEqual(`Bucket name is longer than 63 characters. ${'abcd'.repeat(20)}`);
  });

  it(`doesn't start w/ letter or number`, () => {
    expect(validateS3BucketName('&bucketname')).toEqual('Bucket name must start with a letter or number. &bucketname');
  });

  it('starts with slash', () => {
    expect(validateS3BucketName('/bucketname')).toEqual('Bucket name must start with a letter or number. /bucketname');
  });

  it(`doesn't end w/ letter or number`, () => {
    expect(validateS3BucketName('bucketname&')).toEqual('Bucket name must end with a letter or number. bucketname&');
  });

  it('has uppercase letters', () => {
    expect(validateS3BucketName('buCKetname')).toEqual('Bucket name cannot contain uppercase letters. buCKetname');
  });

  it('contains invalid characters', () => {
    expect(validateS3BucketName('bucket$name')).toEqual('Bucket name contains invalid characters, [a-z.0-9-]. bucket$name');
  });

  it('contains consecutive periods', () => {
    expect(validateS3BucketName('bucket..name')).toEqual('Bucket name cannot contain consecutive periods (.) bucket..name');
  });

  it('looks like ip v4 address', () => {
    expect(validateS3BucketName('127.0.0.1')).toEqual('Bucket name cannot look like an IPv4 address. 127.0.0.1');
  });
});

describe('returns nothing', () => {
  it('is a valid bucket name', () => {
    expect(validateS3BucketName('1.this.is.valid.2')).toEqual('');
  });

  it('is just a single word', () => {
    expect(validateS3BucketName('hello')).toEqual('');
  });
});
