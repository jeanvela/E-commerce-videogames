import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose"

@modelOptions({
    schemaOptions: {
        timestamps: false
    }
})

export class Category {
    @prop({type: String, required: true, unique: true})
    name: string
}

export default getModelForClass(Category)