const sequelize = require('./sequelize');
const User = require('./models/User');

async function createUser(name, email, age) {
  try {
    await sequelize.sync();
    const user = await User.create({ name, email, age });
    return user;
  } catch (error) {
    console.error(error);
  }
}

async function run() {
  try {
    const user1 = await createUser("vino", "vm@mail", 30);
    const user2 = await createUser("moove", "moove@abc", 30);
    const val_1 = await createUser("nisanth", "nisanth@mai", 20);
    const val_2 = await createUser("kumar2", "kumar@mai", 20);
    const val_3= await createUser("ka2", "kar@mai", 20);
    const user3 = await createUser("arun", "arun@mai", 10);
    const user4 = await createUser("bharath", "bharat@mai", 11);
    const user5 = await createUser("cooke", "cd@mai", 20);
    const user6 = await createUser("dpi", "kpy@mai", 10);
    const user7 = await createUser("eagle", "elep@mai", 10);
    const user8 = await createUser("prabha","praba@mail",20) 
    await val_3.destroy();
    // console.log("User val_3 has been deleted.");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

run();
