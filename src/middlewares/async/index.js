function AsyncMiddleware(fn) {
  return async (req, res, next) => {
    try {
      await fn(req, res)
    } catch (error) {
      console.log('async catch: ', error)
      next()
    }
  }
}

module.exports = AsyncMiddleware
