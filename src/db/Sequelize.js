import { Sequelize } from 'sequelize';

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize('pr-custom-admin', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
    schema: 'schema-admin'

});

export default { sequelize }