import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        const MongoUrl = process.env.MONGO_URL
            if (!MongoUrl) return console.log("no env found for database ")

        await mongoose
            .connect(MongoUrl)
            .then(() => {
                console.log("Connection with mongodb is successful");
            })
            .catch((err) => console.log("err", err));
    } catch (error) {
        console.log("an error occured in the connection file ");

    }
}

export default dbConnect
