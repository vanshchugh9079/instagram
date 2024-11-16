import User from "../../models/User.js";
import ApiResponse from "../../utils/ApiResponse.js"
import ApiError from "../../utils/ApiError.js"
import jsonResponse from "../../utils/jsonResponse.js";
import errorHandler from "../../utils/errorHandler.js"
import { cloudinaryUpload } from "../../utils/cloudniaryUpload.js";
let register = async (req, res) => {
    let { name, email, password, phone } = req.body;
    let file = req.file;
    const existingUser = await User.findOne({ $or: [{ email }, { name }, { phone }] });
    if (existingUser) {
        if (file) {
            fs.unlink(file.path, (err) => {
                if (err) throw new ApiError(400, err.message);
            });
        }
        throw new ApiError(400, "User already exists");
    }
    let uploadResult
    if (file) {
        uploadResult = await cloudinaryUpload(file);
        fs.unlink(file.path, (err) => {
            if (err) throw new ApiError(400, err.message);
        });
    }
    const userObj = {
        email,
        name,
        password,
        phone,
    };
    if (uploadResult) {
        userObj = {
            ...userObj,
            avatar: {
                public_id: uploadResult.public_id,
                url: uploadResult.url,
            }
        }
    }
    
    const user = await User.create(userObj);
    const data = await jsonResponse(user);
    const response = new ApiResponse(data, 200, "User created successfully");
    res.cookie('token', response.data.token, { httpOnly: true, secure: true });
    res.status(200).json(response)
}
export default errorHandler(register);