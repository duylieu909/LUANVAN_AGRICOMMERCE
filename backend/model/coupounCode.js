const mongoose = require("mongoose");

const coupounCodeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vui lòng nhập tên mã giảm giá!"],
    unique: true,
  },
  value: {
    type: Number,
    required: true,
  },
  // minAmount: {
  //   type: Number,
  // },
  // maxAmount: {
  //   type: Number,
  // },
  shopId: {
    type: String,
    required: true,
  },
  selectedProducts: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  remainingQuantity: {
    type: Number,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("CoupounCode", coupounCodeSchema);
