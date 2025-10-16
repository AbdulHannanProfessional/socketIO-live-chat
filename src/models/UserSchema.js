import mongoose from "mongoose"
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            Default: "User",
            maxlength: 40,
            trim: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model("Chat Users", userSchema);

export default User