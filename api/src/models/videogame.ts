import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: false // * para saber cuando fue creado
    }
})

export class Videogame {
    @prop({type: String, required: true, unique: true})
    title: string

    @prop({type: String, required: true})
    image: string

    @prop({type: Number, required: true})
    price: number

    @prop({type: String, required: true})
    description: string

    @prop({type: [String], required: true})
    category: string[]

    @prop({type: [String], required: true})
    platform: string[]
}

export default getModelForClass(Videogame)