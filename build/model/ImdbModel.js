"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImdbModel = exports.ImdbSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ImdbSchema = new mongoose_1.default.Schema({
    Title: {
        type: String,
        required: true,
    },
    Year: {
        type: String,
        required: true,
    },
    Released: {
        type: String,
        required: true,
    },
    Runtime: {
        type: String,
        required: true,
    },
    Genre: {
        type: String,
        required: true,
    },
    Plot: {
        type: String,
        required: true,
    },
    Poster: {
        type: String,
        required: true,
    },
    imdbRating: {
        type: String,
        required: true,
    },
    imdbID: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true,
    },
    runtimeMins: {
        type: Number,
    },
    genreList: {
        type: (Array),
    },
    releaseDate: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.ImdbModel = mongoose_1.default.model("Imdb", exports.ImdbSchema);
//# sourceMappingURL=ImdbModel.js.map