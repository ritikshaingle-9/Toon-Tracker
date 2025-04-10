import TvShow from './../models/TvShow.js';



const postTvShows= async(req,res)=>{
    const { title,timing,channel,thumbnail}= req.body;

    const newTvShow = new TvShow({
        title,
        timing,
        channel,
        thumbnail
    });

    const savedTvShow = await newTvShow.save();

    res.status(201).json({
        success:true,
        data : savedTvShow,
        message:"TV show added successfully "
    })
}

export {postTvShows};

