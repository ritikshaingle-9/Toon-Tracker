import TvShow from './../models/TvShow.js';
//--------------------------------get api-----------------------------------------------//
const getTvShows = async(req,res)=>{
    const fetchedTvShow = await TvShow.find();
     
    res.status(200).json({
       success:true,
       data:fetchedTvShow,
       message:"Tv show fetched successfully",
    });
}
//--------------------------------post api-----------------------------------------------//

const postTvShows= async(req,res)=>{
    const { title,timing,channel,thumbnail}= req.body;

    if(!title){
        res.status(400).json({
         success:false,
         message:"Title is required",
         data:null
        })
    }

    if(!timing){
        res.status(400).json({
         success:false,
         message:"Timing is required",
         data:null
        })
    }

    if(!channel){
        res.status(400).json({
         success:false,
         message:"Channel is required",
         data:null
        })
    }

    if(!thumbnail){
        res.status(400).json({
         success:false,
         message:"thumbnail is required",
         data:null
        })
    }

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
//--------------------------------getbyid api-----------------------------------------------//
const getTvShowById = async(req,res)=>{
    const {id} = req.params;

    try{
    const fetchedTvShowbyid = await TvShow.findById(id);
    if(!TvShow){
        return res.status(404).json({
        success:false,
        data:null,
        message:"Tv show not found", 
        })
    }

     res.status(200).json({
        success:true,
        Data:fetchedTvShowbyid,
        message:"Tv Show Fetched Succesfully"
     })
}
catch(e){
  return res.status(400).json({
    success:false,
    data:null,
    message:e.message
  })
}
}
//--------------------------------delete api-----------------------------------------------//
const deleteTvShowById = async(req,res)=>{
 const {id} = req.params;
 
 try{
 await TvShow.deleteOne({_id:id});

 if(!id){
    return res.status(404).json({
    success:false,
    data:null,
    message:"Id is required", 
    })
}
   
   return req.status(400).json({
    success:true,
    message:"TvShow deleted succesfully"
   })
}
catch(e){
    return res.status(400).json({
    success:false,
    data:null,
    message: e.message
})
};
}
export {postTvShows , getTvShows, getTvShowById, deleteTvShowById };
