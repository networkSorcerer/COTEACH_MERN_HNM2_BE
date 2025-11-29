const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = require("./Order");
const Product = require("./Product");
const orderItemsSchema = Schema(
  {
    orderId: { type: mongoose.objectId, ref: Order },
    productId: { type: mongoose.objectId, ref: Product },
    price: { type: Number, required: true },
    qty: { type: Number, required: true },
    size: { type: String, required: true },
  },
  { timestamps: true }
);
orderItemsSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.updateAt;
  delete obj.createAt;
  return obj;
};

const OrderItems = mongoose.model("OrderItems", orderItemsSchema);
module.exports = OrderItems;
