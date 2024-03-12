"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImdbController = void 0;
const ImdbModel_1 = require("../model/ImdbModel");
class ImdbController {
    constructor() {
        this.getAllItems = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const employees = yield ImdbModel_1.ImdbModel.find();
                return res.status(200).json({ data: employees });
            }
            catch (error) {
                return res.status(400);
            }
        });
        this.getImdb = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const employee = yield ImdbModel_1.ImdbModel.findById(id);
                return res.status(200).json({ data: employee });
            }
            catch (error) {
                return res.status(400);
            }
        });
        this.createImdb = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const employee = yield new ImdbModel_1.ImdbModel(req.body);
                yield employee.save();
                return res.status(200).json({ message: "imdb created" });
            }
            catch (error) {
                return res.status(400);
            }
        });
        this.createMultipleImdbs = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield ImdbModel_1.ImdbModel.insertMany(req.body);
                return res.status(200).json({ message: "imdb's created" });
            }
            catch (error) {
                return res.status(400);
            }
        });
        this.deleteImdb = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield ImdbModel_1.ImdbModel.findByIdAndDelete({ _id: id });
                return res.status(200).json({ message: "imdb deleted" });
            }
            catch (error) {
                return res.status(400);
            }
        });
    }
}
exports.ImdbController = ImdbController;
exports.default = new ImdbController();
//# sourceMappingURL=ImdbController.js.map