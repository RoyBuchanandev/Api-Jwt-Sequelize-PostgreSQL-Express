import Sequelize from "sequelize";

export const sequelize = new Sequelize(
    'projectsdb',
    'postgres',
    '123456',
    {
        host: 'localhost',
        dialect: 'postgres',
    }
);