import { Schema, model } from "mongoose";
import { type Thing } from "../data/types";

const thingShema = new Schema<Thing>({
  name: {
    type: String,
    required: true,
  },
});

const thing = model("thing", thingShema, "things");

export default thing;
