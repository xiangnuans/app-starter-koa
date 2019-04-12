'use strict';

const { log, SysError, errCode, errMsg } = require('../common');
/*
 * JSON.parse 替代版
 * 判断是否 string 若是则执行 JSON.parse，否则直接返回
 * 若 string 非有效 json 字符串，则直接返回空结构体{}
 * 输入null undifined 返回 {}
 */
exports.jsonParse = (str) => {
  let result = {};
  if (typeof str === 'string') {
    try {
      result = JSON.parse(str);
    } catch (e) {
      log.error(e);
      log.error('input string: ', str);
    }
  } else if (str) {
    result = str;
  }
  return result;
};

/**
 * arr1 = [{id: 1}]
 * arr2 =[1, 2]
 * 如果arr1数组下的id在arr2数组下有的话，返回false
 */
exports.arrIsEqual = (arr1, arr2) => {
  let flag = false;
  arr1.forEach((v) => {
    if (arr2.indexOf(v.id) >= 0) {
      flag = true;
    }
  });
  return flag;
};

exports.arrString = (list) => {
  let ids = '';
  if (typeof list === 'string') {
    ids = list.substring(1, list.length - 1);
  } else {
    ids = list.toString();
  }
  return ids;
};

exports.checkUpdateId = (list) => {
  // eslint-disable-next-line array-callback-return
  list.map((v) => {
    if (v.id === undefined) {
      throw new SysError(errMsg.STRATEGY_NODE_ID, errCode.ERROR_STRATEGY_NODE_ID);
    }
  });
  return true;
};

/**
 * 判断对象是否为json数据
 */
exports.isJson = (str) => {
  if (typeof str === 'string') {
    try {
      if (typeof JSON.parse(str) === 'object') {
        return true;
      }
    } catch (e) {
      throw new SysError(errMsg.NODE_GRAPH_DATA, errCode.ERROR_NODE_GRAPH_DATA);
    }
  }
  return false;
};

/**
 * 判断字符串是否为空
 */
exports.isNotEmpty = (str) => {
  let flag = true;
  if (typeof str === 'undefined' || str == null) {
    flag = false;
  }
  return flag;
};

/**
 * 签名计算
 */

exports.doHttpSignature = (param) => {
  const content = param;
  return content;
};
