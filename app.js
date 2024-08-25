const express = require('express');
const app = express();
const schoolRoutes = require('./routes/schools');

app.use(express.json());

// routes
app.use('/schools',schoolRoutes);

const PORT =process.env.PORT || 3000;
app.listen(PORT , () => {
  console.log(`Server running on port ${PORT}`);
});
