const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Order = require("./Order");
const Product = require("./Product");
const User = require("../models/User");
const orderSchema = Schema(
  {
    userId: { tyep: mongoose.ObjectId, ref: User },
    status: { type: String, default: "preparing" },
    totalPrice: { type: Number, required: true, default: 0 },
    shipTo: { type: Object, required: true },
    contact: { type: Object, required: true },
    orderNum: { type: String },
  },
  { timestamps: true }
);
orderSchema.method.toJSON = function () {
  const obj = this._doc;
  delete obj.updateAt;
  delete obj.createAt;
  return obj;
};

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
