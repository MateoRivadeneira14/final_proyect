const app = require('./src/app');
const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Auth Send Verification Code Service running on port ${PORT}`);
});
