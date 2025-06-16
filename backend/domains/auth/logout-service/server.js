const app = require('./src/app');
const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`Auth Logout Service running on port ${PORT}`);
});
