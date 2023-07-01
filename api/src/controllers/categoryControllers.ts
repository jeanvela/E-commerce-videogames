import { Request, Response} from "express"
import { getModelForClass } from "@typegoose/typegoose"
import { Category } from "../models/category"

export const getCategories = async (req: Request, res: Response) => {
    try {
        const CategoryModel = getModelForClass(Category)
        const allCategories = await CategoryModel.find()
        res.status(200).json(allCategories)
    } catch (error) {
        res.status(404).json({error})
    }
}

export const createCategory = async (req: Request, res: Response) => {
    try {
        const { name } = req.body
        const CategoryModel = getModelForClass(Category)
        const newCategory = new CategoryModel({
            name
        })
        await newCategory.save()
        res.status(200).json(newCategory)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteCategory =async (req: Request, res: Response) => {
    try {
        const { _id } = req.body
        const CategoryModel = getModelForClass(Category)
        const dtCategory = await CategoryModel.deleteOne(_id)
        res.status(200).json(dtCategory)
    } catch (error) {
        res.status(404).json(error)
    }
}