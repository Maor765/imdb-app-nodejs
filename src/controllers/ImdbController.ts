import express from "express";
import { ImdbModel } from "../model/ImdbModel";

export class ImdbController {
  getAllItems = async (req: express.Request, res: express.Response) => {
    try {
      const employees = await ImdbModel.find();
      return res.status(200).json({ data: employees });
    } catch (error) {
      return res.status(400);
    }
  };

  getImdb = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
      const employee = await ImdbModel.findById(id);
      return res.status(200).json({ data: employee });
    } catch (error) {
      return res.status(400);
    }
  };

  createImdb = async (req: express.Request, res: express.Response) => {
    try {
      const employee = await new ImdbModel(req.body);
      const data = await employee.save();
      return res.status(200).json({ message: "imdb created", data });
    } catch (error) {
      return res.status(400);
    }
  };

  createMultipleImdbs = async (req: express.Request, res: express.Response) => {
    try {
      const data = await ImdbModel.insertMany(req.body);
      return res.status(200).json({ message: "imdb's created", data });
    } catch (error) {
      return res.status(400);
    }
  };


  deleteImdb = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
      await ImdbModel.findByIdAndDelete({_id: id});
      return res.status(200).json({ message: "imdb deleted", data:id });
    } catch (error) {
      return res.status(400);
    }
  };

  deleteManyImdb = async (req: express.Request, res: express.Response) => {
    try {
      const { type } = req.params;
      const data = await ImdbModel.deleteMany({Type: type});
      return res.status(200).json({ message: "imdb deleted", data });
    } catch (error) {
      return res.status(400);
    }
  };
}

export default new ImdbController();