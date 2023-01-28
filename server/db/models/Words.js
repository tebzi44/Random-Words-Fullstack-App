const { Model, DataTypes } = require('sequelize');

class Words extends Model {
  static init(connection) {
    super.init({
        word: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }, 
        value: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }, 
        createdAt: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        deletedAt: {
          type: DataTypes.TIME,
          allowNull: true,
        },
    },
      {
        sequelize: connection,
        tableName: 'words',
        timestamps: true,
        updatedAt: false
      }
    );
  }
}

module.exports = Words;
