const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required!"],
      trim: true,
      maxLength: [31, "The length of user name can be maximum 31 characters"],
      minLength: [3, "The length of user name can be minimum 3 characters"],
    },
    email: {
      type: String,
      required: [true, "User email is required!"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (v) => {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "User password is required!"],
      minLength: [6, "The length of user name can be minimum 6 characters"],
    },
    image: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      required: [true, "User address is required!"],
    },
    phone: {
      type: String,
      required: [true, "User phone is required!"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("Users", userSchema);

module.exports = User;
