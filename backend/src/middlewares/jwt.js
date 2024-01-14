import jwt from 'jsonwebtoken';

const generateAccessToken = async (user) => {
  const token = jwt.sign(
    {
      userId: user._id,
      userEmail: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );

  return token;
};

const generateRefreshToken = async (user) => {
  const refresh = jwt.sign(
    {
      userId: user._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return refresh;
};

// const accessToken = jwt.sign(
//     {
//       UserInfo: {
//         username: foundUser.username,
//         roles: foundUser.roles,
//       },
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     { expiresIn: '15m' }
//   );

//   const refreshToken = jwt.sign(
//     { username: foundUser.username },
//     process.env.REFRESH_TOKEN_SECRET,
//     { expiresIn: '7d' }
//   );

//   // Create secure cookie with refresh token
//   res.cookie('jwt', refreshToken, {
//     httpOnly: true, //accessible only by web server
//     secure: true, //https
//     sameSite: 'None', //cross-site cookie
//     maxAge: 7 * 24 * 60 * 60 * 1000, //cookie expiry: set to match rT
//   });

export { generateAccessToken, generateRefreshToken };