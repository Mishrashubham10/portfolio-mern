import mongoose from 'mongoose';
import mongooseAggregratePaginate from 'mongoose-aggregate-paginate-v2';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    message: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

// HASHING PASSWORD WITH MONGOOSE PRE METHOD
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// // ACCESS TOKEN
// userSchema.methods.generateAccessToken = async function () {
//   const token = jwt.sign(
//     {
//       id: this._id,
//       username: this.username,
//       email: this.email,
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     { expiresIn: ACCESS_TOKEN_EXPIRY }
//   );

//   return token;
// };

// // REFRESH TOKEN
// userSchema.methods.generateAccessToken = async function () {
//   const refresh = jwt.sign({ id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: REFRESH_TOKEN_EXPIRY,
//   });

//   return refresh;
// };

userSchema.plugin(mongooseAggregratePaginate);

const User = mongoose.model('User', userSchema);

export default User;
