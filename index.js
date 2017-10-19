module.exports = function(bucketName) {
  if (!bucketName || typeof bucketName !== 'string') {
    return 'Bucket name cannot be undefined or empty';
  }

  return '';
};
