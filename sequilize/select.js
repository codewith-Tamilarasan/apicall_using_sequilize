const sequelize = require('./sequelize');
const User = require('./models/User');

const select =async()=>{

  const all_users = await User.findAll()
  console.log("All users:", JSON.stringify(all_users, null, 2));

}

select();