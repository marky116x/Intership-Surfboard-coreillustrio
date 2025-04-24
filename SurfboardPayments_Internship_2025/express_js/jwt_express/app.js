const express = require("express");
const app = express();
const authRoutes = require("./models/routes/auth.js");

const protectedRoute = require("./models/routes/protectedRoute.js");
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/protected", protectedRoute);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
