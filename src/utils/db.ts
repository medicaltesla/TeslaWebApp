// import mongoose from "mongoose";


// const connect = async () => {
//     const MONGO_URL = process.env.MONGO;
//     try {
//         if (!MONGO_URL) {
//             throw new Error("MongoDB URL is not provided");
//         }
        
//         await mongoose.connect(MONGO_URL);
//         console.log("Database Connected");
//     } catch (error) {
//         console.error("Database Connection Failed:", error);
//         throw new Error("Database Connection Failed!!");
//     }
// };

// export default connect;