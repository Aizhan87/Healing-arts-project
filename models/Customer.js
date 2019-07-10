module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define('Customer', {
     
      name: {
        type: DataTypes.STRING,
        allowNull: false,
       },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            isNumeric: true
        }
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
       
      }

     
    });
    Customer.associate = function (models) {
    };
    return Customer;
  };
  