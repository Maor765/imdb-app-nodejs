import mongoose from "mongoose";

const ImdbSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true,
    },
    Released: {
        type: String,
        required: true
    },
    Runtime: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Plot: {
        type: String,
        required: true
    },
    Poster: {
        type: String,
        required: true
    },
    imdbRating: {
        type: String,
        required: true
    },
    imdbID: {
        type: String,
        required: true
    },
    Type: {
        type: String,
        required: true
    },
    runtimeMins: {
        type: Number,
    },
    genreList: {
        type: Array<String>,
    },
    releaseDate: {
        type: String,
    },
}, {
    timestamps: true
});

export const ImdbModel = mongoose.model('Imdb', ImdbSchema);