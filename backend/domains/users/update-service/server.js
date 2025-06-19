const app = require('./src/app');
const { sequelize } = require('./src/config/database');

const PORT = process.env.PORT || 3012;

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`User Update Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
}

start();
