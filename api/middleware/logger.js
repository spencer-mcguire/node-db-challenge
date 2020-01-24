module.exports = logger;

function logger(req, res, next) {
  const { method, originalUrl } = req;
  console.log(`${method} on ${originalUrl} at ${Date()}`);
  next();
}
