import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';

function getConnection() :Sequelize {
  return new Sequelize({
    'username': config.username,
    'password': config.password,
    'database': config.database,
    'host': config.host,
  
    'dialect': config.dialect,
    'storage': ':memory:',
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false 
      }
    }
  });
}

export const sequelize = getConnection()