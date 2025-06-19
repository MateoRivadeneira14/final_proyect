const app = require('./src/app');

const PORT = process.env.PORT || 3017;

app.listen(PORT, () => {
  console.log(`Access Control Service running on port ${PORT}`);
});
