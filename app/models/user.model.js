module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    organisation: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
