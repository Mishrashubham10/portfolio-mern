import { asyncHandler } from "../utils/asyncHandler";

// REGISTER USER
const register = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'User register successfully' })
})

// Login USER
const login = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'User logged in successfully' })
})

export { register, login }