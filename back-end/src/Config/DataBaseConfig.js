const mysql = require('mysql');

//Const -> DataBase
const Host = "host";
const User = "root";
const Password = "root";
const dataBaseName = "NameDatabase";


//Create Connection to dataBase
const dataBaseConfig = mysql.createConnection({ 
    host: Host,
    user: User,
    password: Password,
    database: dataBaseName
});

//Create Connection with database
dataBaseConfig.connect(e => {
    if(e){
        throw (e);
    }
});

module.exports = dataBaseConfig;