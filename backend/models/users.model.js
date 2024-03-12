import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

//USER SCHEMA
let userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

//HASH THE PASSWORD BEFORE SAVING MIDDLEWARE
userSchema.pre("save", async function (next) {
  //hash the password only if the password is modified
  if (!this.isModified) {
    return next();
  }

  //if modified
  try {
    let hashPassword = await bcryptjs.hash(this.password, 10);
    this.password = hashPassword;
    next();
  } catch (error) {
    resizeBy.status(500).json({
      status: "Interbal Server Error",
      message: "An unexpected error occurred on the server while hashing password",
    });
  }
});

//SOME HELPER METHODS
userSchema.methods.isCorrectedPassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

//EXPORT USER MODEL
export const User = mongoose.model("User", userSchema);
