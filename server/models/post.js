import mongoose from "mongoose"

const postSchema=new  mongoose.model({
    title:{
        type:String
    },
    message:{
        true:String
    },
    creator:{
        type:String
    },
    tags:[
        {
            type:String
        }
    ],
    selectedField:{
        type:String
    },
    likeCount:{
        type:String,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});

const Post=mongoose.model('Post',postSchema);
export default Post;