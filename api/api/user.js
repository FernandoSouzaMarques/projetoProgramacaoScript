const bcrypt = require('bcrypt-nodejs');
const validation = require('./validation');

module.exports = app => {
  const { existOrError, notExistOrError, equalsOrError } = validation;

  const encryptPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  const save = async (req, res) => {
    const user = { ...req.body };

    if (req.params.id) user.id = req.params.id;
    try {
      existOrError( user.name, 'Nome não informado')
      existOrError( user.email, 'E-mail não informado')
      existOrError( user.password, 'Senha não informada')
      existOrError( user.confirmPassword, 'Comparação de senha não informada')
      equalsOrError( user.password, user.confirmPassword, 'Senha e confirmação estão diferentes')

      const userFromDB = await app.db('users').where({email: user.email}).first();
      
      if (!user.id) {
        notExistOrError(userFromDB, 'Usuário já cadastrado')
      }

    } catch(msg) {
      return res.status(400).send(msg);
    } 
  }
  return { save }
}