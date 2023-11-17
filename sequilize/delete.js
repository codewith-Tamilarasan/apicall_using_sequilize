const sequelize = require('./sequelize');
const User = require('./models/User');

const delete_op = async () => {
  try {
    
   
    await User.destroy({
      where: {
        age: 10
      }
    });
    console.log("Records with age 12 have been deleted.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

delete_op();
