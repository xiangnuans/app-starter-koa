'use strict';

/**
 * 业务解析层，样例代码
 */

const { example } = require('../service');
const { log, SysError, errCode, errMsg } = require('../common');

class clusterController {
  /**
   * @api {post} /cluster 创建微信群组
   * @apiVersion 1.0.0
   * @apiName createCluster
   * @apiGroup cluster
   * @apiPermission none
   *
   * @apiDescription this is
   *
   * @apiParam {String} name 微信群组名称（必填）.
   * @apiParam {String} descr 描述信息.
   * @apiSuccessExample  Response (example):
   *     {
   *       "code": SUCCESS_OK,
   *       "success": true,
   *       "message": "",
   *        "data: {
   *          id: 1
   *        }
   *     }
   * @apiErrorExample  Response (example):
   *     {
   *       "code": errCode,
   *       "success": false,
   *       "message": "err msg",
   *        "data: {}
   *     }
   */
  static async createCluster(ctx) {
    try {
      const { state, body } = ctx.reqParam;
      const result = await example.createCluster(Object.assign(state, body));
      ctx.body = { result: result.id };
    } catch (e) {
      log.info('create cluster with err: ', e);
      throw new SysError(errMsg.CLUSTER_GET, errCode.ERROR_CLUSTER_GET);
    }
  }

  /**
   * 测试mqtt
   */
  static async publishMsg(ctx) {
    try {
      const { state, body } = ctx.reqParam;
      const result = await example.publishMsg(Object.assign(state, body));
      ctx.body = result;
    } catch (e) {
      log.info('test mqtt with err: ', e);
      throw new SysError(errMsg.CLUSTER_GET, errCode.ERROR_CLUSTER_GET);
    }
  }
}

module.exports = clusterController;
