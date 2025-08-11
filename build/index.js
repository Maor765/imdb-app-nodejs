"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const imdbRoutes_1 = __importDefault(require("./routes/imdbRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config(); // Load environment variables from .env file
const MONGO_URI = process.env.MONGO_URI; // Retrieve the environment variable
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.options("*", (0, cors_1.default)());
const PORT = process.env.PORT || 3000;
mongoose_1.default.set("strictQuery", false);
console.log("MONGO_URI:", MONGO_URI); // Use the environment variable as needed
mongoose_1.default
    .connect(MONGO_URI, {
    dbName: "node-typescript-app",
})
    .then((r) => {
    console.log(`database connected: ${r.connections[0].host}`);
})
    .catch((error) => {
    console.log(error);
    process.exit(1);
});
app.get("/", (req, res) => {
    try {
        res.json({
            msg: "It's working!",
        });
    }
    catch (x) {
        console.error(x);
        res.json({ error: x });
    }
});
app.use("/", imdbRoutes_1.default);
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map