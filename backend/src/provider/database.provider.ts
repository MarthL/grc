import { Sequelize } from 'sequelize-typescript';
import { Cities } from '../cities/cities.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        database: 'grc_city',
      });
      sequelize.addModels([Cities]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
