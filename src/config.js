const { config } = require('dotenv')
config()

module.exports = {
    db: {
        user: 'postgres',
        password: 'admin.aws123',
        host: 'services.con59mchywxh.us-east-2.rds.amazonaws.com',
        port: 5432,
        database: 'capas',
    }
}
