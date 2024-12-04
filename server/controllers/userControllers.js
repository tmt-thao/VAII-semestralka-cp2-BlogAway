// REGISTER A NEW USER =============================================
// POST request: api/users/register
// UNPROTECTED
const registerUser = async (req, res, next) => {
    res.json("Register User")
}

// LOGIN A REGISTERED USER ==========================================
// POST request: api/users/login
// UNPROTECTED
const loginUser = async (req, res, next) => {
    res.json("Login User")
}

// USER PROFILE =====================================================
// GET request: api/users/:id
// PROTECTED
const getUser = async (req, res, next) => {
    res.json("User Profile")
}

// CHANGE USER AVATAR (profile picture) =============================
// POST request: api/users/change-avatar
// PROTECTED
const changeAvatar = async (req, res, next) => {
    res.json("Change User Avatar")
}

// EDIT USER DETAILS (from profile) =================================
// PATCH request: api/users/edit-user
// PROTECTED
const editUser = async (req, res, next) => {
    res.json("Edit User Details")
}

// GET AUTHORS ======================================================
// GET request: api/users/
// UNPROTECTED
const getAuthors = async (req, res, next) => {
    res.json("Get All Authors")
}

module.exports = { registerUser, loginUser, getUser, changeAvatar, editUser, getAuthors }