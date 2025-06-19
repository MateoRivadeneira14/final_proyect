const app = require('./src/app');
const { sequelize } = require('./src/config/database');

const PORT = process.env.PORT || 3015;

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`User Disable Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

start();
