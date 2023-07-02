import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose"

@modelOptions({
    schemaOptions: {
        timestamps: false
    }
})

export class Platform {
    @prop({type: String, require: true, unique: true})
    name: string
}

export default getModelForClass(Platform)