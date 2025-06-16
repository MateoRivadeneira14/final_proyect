const app = require('./src/app');
const { sequelize } = require('./src/config/database');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

async function start() {
    try {
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Auth Register Service running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
}

start();
