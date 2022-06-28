const Sequelize = require('sequelize');

module.exports = class Sns extends Sequelize.Model {
    static init(sequelize){
       return super.init({
          content: {
             type: Sequelize.TEXT,
             allowNull: false
          },
          oldimg: {
            type: Sequelize.STRING(200),
            allowNull: true
          },
          newimg: {
            type: Sequelize.STRING(200),
            allowNull: true
          }
       }, {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Sns',
        tableName: 'snss',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
       });
    }
    static associate(db) {}
}       