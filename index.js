const isIP = require('is-ip');

module.exports = function(bucketName) {
  if (!bucketName || typeof bucketName !== 'string') {
    return 'Bucket name cannot be undefined or empty';
  }

  if (bucketName.length < 3) {
    return `Bucket name is shorter than 3 characters. ${bucketName}`;
  }

  if (bucketName.length > 63) {
    return `Bucket name is longer than 63 characters. ${bucketName}`;
  }

  if (/^[^a-z0-9]/.test(bucketName)) {
    return `Bucket name must start with a letter or number. ${bucketName}`;
  }

  if (/[^a-z0-9]$/.test(bucketName)) {
    return `Bucket name must end with a letter or number. ${bucketName}`;
  }

  if (/[A-Z]/.test(bucketName)) {
    return `Bucket name cannot contain uppercase letters. ${bucketName}`;
  }

  if (!/^[a-z0-9][a-z.0-9-]+[a-z0-9]$/.test(bucketName)) {
    return `Bucket name contains invalid characters, [a-z.0-9-]. ${bucketName}`;
  }

  if (/\.{2,}/.test(bucketName)) {
    return `Bucket name cannot contain consecutive periods (.) ${bucketName}`;
  }

  if (isIP(bucketName)) {
    return `Bucket name cannot look like an IPv4 address. ${bucketName}`;
  }

  return '';
};
