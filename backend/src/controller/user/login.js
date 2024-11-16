import User from "../../models/User.js";
import ApiError from "../../utils/ApiError.js";
import ApiResponse from "../../utils/ApiResponse.js";
import errorHandler from "../../utils/errorHandler.js";
import jsonResponse from "../../utils/jsonResponse.js";

let login = async (req, res) => {    
    try {
        let enterSource = req.body.name || req.body.email || req.body.phone;
        let password = req.body.password;  // Retrieve password from request body
        if(!enterSource){
            throw new ApiError(400,"plese enter name or email or Mobile-no")
        }
        if(!password){
            throw new ApiError(400,"plese enter password")
        }
        // Find user by email, name, or phone
        let user = await User.findOne({
            $or: [
                { email: enterSource },
                { name: enterSource },
                { phone: enterSource }
            ]
        });

        if (!user) {
            throw new ApiError(404, `User not found:`);
        }

        // Check if the password matches
        let isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            throw new ApiError(401, "Invalid password");
        }
        // Generate token and prepare response
        let sanitizedUser = await jsonResponse(user);
        let response = new ApiResponse(sanitizedUser, 200, "Login successfully");

        // Send response
        res.status(response.status).json(response);

    } catch (error) {
        // Handle errors
        errorHandler(error, req, res);
    }
};

export default login;
