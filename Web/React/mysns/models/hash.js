const Sequelize = require('sequelize');

module.exports = class Hash extends Sequelize.Model {
    static init(sequelize){
       return super.init({
          titile: {
             type: Sequelize.STRING(20),
             allowNull: false,
             unique: true
          },
       }, {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Hash',
        tableName: 'hashs',
        paranoid: false,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
       })
    }
    static associate(db) {
        db.Hash.belongsToMany(db.Sns, {
            through: 'PostHashtag'
        })
    }
}       