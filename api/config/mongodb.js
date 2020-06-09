const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/conhecimento_stats', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(_ => console.log('\x1b[32m','[mongodb] Connected...', '\x1b[0m'))
  .catch( err => {
    const msg = 'ERRO! Não foi possível conectar com o MongoDB'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
  })
