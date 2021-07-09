const config = require("../config/bi.config");
const Sequelize = require("sequelize");

//sequelize connection
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);
const BI_db = {};

BI_db.Sequelize = Sequelize;
BI_db.sequelize = sequelize;






module.exports = BI_db;