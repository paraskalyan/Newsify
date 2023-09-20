const mongoose = require('mongoose');

const NewsletterSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    subscribers:[{
        name:{
            type: String
        },
        email:{
            type:String
        }
    }],
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

modules.export = mongoose.model('newsletters', NewsletterSchema);