import 'dotenv/config'

const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        name: process.env.DB_NAME || 'my_database',
        user: process.env.DB_USER || 'username',
        password: process.env.DB_PASSWORD || 'password',
    },
    jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
    nodeEnv: process.env.NODE_ENV || 'development',
};

export default config