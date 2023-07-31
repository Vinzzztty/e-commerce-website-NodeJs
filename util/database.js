const mongoose = require("mongoose");
const User = require("../models/User");
mongoose.set("strictQuery", false);

// Connect DB
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI);

        // Check if the user exists
        const user = await User.findOne();
        if (!user) {
            const newUser = new User({
                name: "Max",
                email: "max@test.com",
                cart: {
                    items: [],
                },
            });
            await newUser.save();
        }

        console.log(`Database Connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Database no Connected!`, error);
    }
};

module.exports = connectDB;
