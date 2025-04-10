import {Schema, model} from "mongoose";

const TvShowSchema = new Schema ({
    title: String,
    timing: String,
    channel: String,
    thumbnail: String,
})

const TvShow = model("TvShow",TvShowSchema);

export default TvShow;