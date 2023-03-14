/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import Cities from 'src/cities/cities.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        database: 'nest',
      });
      sequelize.addModels([Cities]); // collections here 
      await sequelize.sync();
      return sequelize;
    },
  },
];
