require("dotenv").config();
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./util/database");

const errorController = require("./controllers/errorController");
const User = require("./models/User");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    User.findById("64c7672138db6773187e7ebf")
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const PORT = 3000;

// Connect DB
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
