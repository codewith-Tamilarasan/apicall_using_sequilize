const sequelize = require('./sequelize');
const User = require('./models/User');

const update_db = async () => {
  try {
   

    const user = await User.findOne({
      where: {
        name: "arasan"
      }
    }); 

    if (user) {
      user.email = "person1@gmail.com";
      user.name = "person1";
      await user.save();
      console.log("Successfully updated");
    } else {
      console.log("Updation failed");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

update_db();
