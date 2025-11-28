const mongoose = require("mongoose")
const Schema = mongoose.Schema
const cartSchema = Schema({
 userId:{type:mongoose.ObjectId, ref:User},
 items:[
    {
    productId: {type:mongoose.ObjectId, ref: Prdouct},
    size:{type:String, required: true},
    qty:{type:Number, default:1, required:true}
 },
],
},{timestamps:true})
cartSchema.method.toJSON = function(){
    const obj = this._doc
    delete obj.updateAt
    delete obj.createAt
    return obj
}

const Cart = mongoose.model("Cart", cartSchema)
module.exports = Cart;