import asyncHandler from 'express-async-handler';
// @desc    Auth user.set token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async(req, res)=>{
    res.status(200).json({
        message: "Auth User",
    });
});

// @desc    register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async(req, res)=>{
    res.status(200).json({
        message: "register User",
    });
});

// @desc    logout a user
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async(req, res)=>{
    res.status(200).json({
        message: "logout  User",
    });
});

// @desc    get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async(req, res)=>{
    res.status(200).json({
        message: "get  User",
    });
});

// @desc    update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async(req, res)=>{
    res.status(200).json({
        message: "update  User",
    });
})
export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
};