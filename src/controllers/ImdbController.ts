import express from "express";
import { ImdbModel, ImdbSchema } from "../model/ImdbModel";
import { InferSchemaType } from "mongoose";

type ImdbType = InferSchemaType<typeof ImdbSchema>;

export class ImdbController {
  getAllItems = async (req: express.Request, res: express.Response) => {
    try {
      const data = await ImdbModel.find();
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400);
    }
  };

  getImdb = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
      const data = await ImdbModel.findById(id);
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400);
    }
  };

  createImdb = async (req: express.Request, res: express.Response) => {
    try {
      const db = await ImdbModel.find({ imdbID: req.body.imdbID });
      if (!db.length) {
        return res
          .status(200)
          .json({ message: "imdb duplicated", data: req.body });
      }
      const data = await ImdbModel.insertMany([req.body]);
      return res.status(200).json({ message: "imdb created", data });
    } catch (error) {
      return res.status(400);
    }
  };

  createMultipleImdbs = async (req: express.Request, res: express.Response) => {
    try {
      const duplicatedData = await ImdbModel.find({
        imdbID: { $in: req.body.map((item: ImdbType) => item.imdbID) },
      });
      const filterData = req.body.filter(
        (item: ImdbType) =>
          !duplicatedData.some((d) => d.imdbID === item.imdbID)
      );
      const data = await ImdbModel.insertMany(filterData);
      return res.status(200).json({ message: "imdb's created", data });
    } catch (error) {
      return res.status(400);
    }
  };

  deleteImdb = async (req: express.Request, res: express.Response) => {
    try {
      const { id } = req.params;
      await ImdbModel.findByIdAndDelete({ _id: id });
      return res.status(200).json({ message: "imdb deleted", data: id });
    } catch (error) {
      return res.status(400);
    }
  };

  deleteManyImdb = async (req: express.Request, res: express.Response) => {
    try {
      const { type } = req.params;
      const data = await ImdbModel.deleteMany({ Type: type });
      return res.status(200).json({ message: "imdb deleted", data });
    } catch (error) {
      return res.status(400);
    }
  };
}

export default new ImdbController();
