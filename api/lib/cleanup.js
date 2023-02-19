/** Express Middleware that for running a cleanup function after each handler */
export default function cleanup(callback) {
  return (req, res, next) => {    
    res.on("finish", callback);
    next();
  }
}
