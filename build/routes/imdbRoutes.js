"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ImdbController_1 = __importDefault(require("../controllers/ImdbController"));
const router = express_1.default.Router();
router.get('/imdb', ImdbController_1.default.getAllItems);
router.get('/imdb/:id', ImdbController_1.default.getImdb);
router.post('/imdb', ImdbController_1.default.createImdb);
router.delete('/imdb/:id', ImdbController_1.default.deleteImdb);
router.post('/imdbs', ImdbController_1.default.createMultipleImdbs);
router.delete('/imdbs/:type', ImdbController_1.default.deleteManyImdb);
exports.default = router;
//# sourceMappingURL=imdbRoutes.js.map