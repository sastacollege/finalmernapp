import { User } from "./../models/users.model.js";

//REGISTER USER
const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  //CHECK WHETHER THE GIVEN FIELD IS EMPTY OR NOT
  if ([username, email, password].some((field) => field.trim() === "")) {
    return res.status(400).json({
      status: "Bad Request",
      message: "All field value are required",
    });
  }

  //IF IT IS NOT EMPTY THEN CEHCK WHETHER ALREADY REGISTERED
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (user) {
    return res.status(409).json({
      status: "Conflict Resource",
      message: "User already exist",
    });
  }

  //IF user does not in our database then insert it into the database
  let userCreated = await User.create({ username, email, password });

  return res.status(201).json({
    status: "CREATED",
    message: "user reacted successfully",
    data: userCreated,
  });
};

//LOGIN USER
const loginUser = async (req, res) => {
  try {
    //GET THE DATA FROM THE CLIENT
    const { email, password } = req.body;
    console.log(email, password);

    //TRIM THE USERNAME AND PASSWORD
    if ([email, password].some((field) => field.trim() === "")) {
      return res.status(404).json({
        status: "Bad Request",
        message: "Please provide the all field",
      });
    }

    //FIND THE USER AND COMAPRE THE PASSWORD
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: "Not Found",
        message: "User not found.",
      });
    }

    //IF USER EXIST THEN COMAPRE THE PASSWORD
    const isCorrectPassword = await user.isCorrectedPassword(password);
    if (!isCorrectPassword) {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Incorrect Password",
      });
    }

    //EVERY THING CORRECT
    return res.status(200).json({
      status: "Success",
      message: "Logged in Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "Internal Server Error",
      message: "An error occurred while logging in the user.",
    });
  }
};

//EXPORTS
export { registerController, loginUser };
