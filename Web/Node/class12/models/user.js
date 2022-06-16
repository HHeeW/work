const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            
        num: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userid: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        userpass: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        username: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        indate: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        logindate: {
            type: Sequelize.STRING(50),
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        userlevel: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    },{
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
}
    static associations(db){}
};