const Sequelize = require('sequelize');
/*
    mysql to sequelize 자료형 비교
    auto_increment : autoIncrement: true,
    primart key : primaryKey: true
    varchar(100) -> Sequelize.STRING(100)
    init -> Sequelize.INTEGER,
    tinyint -> Sequelize.BOOLEAN,
    datetime -> Sequelize.DATE,
    int unmsigned -> Sequelize.INTEGER.UNSIGNED,
    not null -> allowNull: false
    unique -> unique: true,
    default now() -> defaultValue: Sequelize
*/

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
        modelName: 'Member',
        tableName: 'members',
        paranoid: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
}
    static associations(db){}
};