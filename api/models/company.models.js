module.ẽports = (sequelize, sequelize) => {
  const Company = sequelize.define("Company", {
    company_id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    company_name: {
      type: sequelize.STRING,
    },
    company_address: {
      type: sequelize.STRING,
    },
    contact_id: {
      type: sequelize.INTEGER,
      references: {
        mode: "contacts",
        key: "id",
      },
    },
  });
  return Company;
};
