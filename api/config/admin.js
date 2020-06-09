module.exports = middleware => {
  return (req, res, next) => {
    if (!req.user.admin) return res.status(401).send('Usuário não é um administrador!');
    middleware(req, res, next)
  }
}