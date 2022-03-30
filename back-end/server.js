//Dependencies
const express = require('express');

//Const -> Server
const server = express();
const port = 3001;
const nodeEnv = 'Development';

server.listen(port, () =>{ 
    console.warn(`Server is running in ${port} in ${nodeEnv} mode`);
});

module.exports = server;