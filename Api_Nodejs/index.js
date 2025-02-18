const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const multer = require("multer");
const kenx = require("knex");
const config = require("./config");
const authenticateToken = require('./middleware/access-token');
const db = kenx(config.db);
const port = config.server.port;
const verifyToken = require('./middleware/verifyToken');

const router = express.Router();

app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
    req.db = db;
    req.config = config;
    req.authToken = authenticateToken;
    next();
});

app.use("/auth", require("./routes/auth"));
app.use("/admin", require("./routes/admin"));
app.use("/teacher", require("./routes/teacher"));
app.use("/user", require("./routes/user"));
app.use("/settings", require("./routes/settings"));
app.use("/function_python", require("./routes/function_python"));
app.use("/upload", require("./routes/uploads"));
app.use("/get_data", require("./routes/get_data"));
app.use("/updated_data", require("./routes/updated_data"));
app.use("/upload_data", require("./routes/upload_data"));

// ให้สามารถเข้าถึงไฟล์ในโฟลเดอร์ uploads ผ่าน URL
app.use("/uploads", express.static("uploads"));


app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});

router.get('/secure-route', verifyToken, (req, res) => {
  res.status(200).json({ message: 'You have access!' });
});
