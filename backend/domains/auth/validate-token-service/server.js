const app = require('./src/app');
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Auth Validate Token Service running on port ${PORT}`);
});
