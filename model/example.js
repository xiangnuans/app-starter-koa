'use strict';

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('t_bas_cluster', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED, primaryKey: true, allowNull: false, autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING, allowNull: false, defaultValue: '', field: 'name',
    },
    descr: {
      type: DataTypes.STRING, allowNull: false, defaultValue: '', field: 'descr',
    },
    createTime: {
      type: DataTypes.DATE, allowNull: false, field: 'create_time', defaultValue: DataTypes.NOW(), order: 'DESC',
    },
    updateTime: {
      type: DataTypes.DATE, allowNull: false, field: 'update_time', defaultValue: DataTypes.NOW(),
    },
    creator: {
      type: DataTypes.INTEGER(10), allowNull: false, field: 'creator', defaultValue: 0,
    },
    reviser: {
      type: DataTypes.INTEGER(10), allowNull: false, field: 'reviser', defaultValue: 0,
    },
    dataStatus: {
      type: DataTypes.STRING, allowNull: false, defaultValue: '001', field: 'data_status',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    indexes: [
      { fields: ['name'], name: 'name_index', method: 'BTREE' },
    ],
  });
  return model;
};
