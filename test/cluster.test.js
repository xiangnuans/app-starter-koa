'use strict';

/*
 * 测试样例 controller/cluster.js
 */

const mm = require('mm');
const should = require('should');     // eslint-disable-line
const supertest = require('supertest');
const app = require('../app');
const log = require('../common/log');

const request = supertest(app.listen());

describe('controller/wechat/cluster.js', () => {
  it('success post /wechat/cluster', (done) => {
    const body = {
      userId: 1,
      name: `微信群组${parseInt(Math.random() * 201, 10)}`,
    };
    request
      .post('/wechat/cluster')
      .send(body)
      .set('Accept', 'appliction/json')
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        log.info('[create cluster]: ', JSON.stringify(data));
        data.success.should.equal(true);
        mm.restore();
        done();
      });
  });

  it('success put /wechat/cluster/:id', (done) => {
    const body = {
      userId: 1,
      name: 'cluster2',
    };
    request
      .put('/wechat/cluster/1')
      .send(body)
      .set('Accept', 'appliction/json')
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        data.success.should.equal(true);
        mm.restore();
        done();
      });
  });

  it('success get /wechat/cluster', (done) => {
    request
      .get('/wechat/cluster')
      .query({
        userId: 1,
        currentPage: 1,
        pageSize: 10,
      })
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        data.success.should.equal(true);
        data.data.list[0].should.have.properties('id', 'name', 'descr', 'groupCount', 'wxCount', 'createTime', 'updateTime', 'dataStatus');
        mm.restore();
        done();
      });
  });

  it('success delete /wechat/cluster', (done) => {
    request.delete('/wechat/cluster')
      .query({
        userId: 1,
        idList: [6, 7],
      })
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        log.info('[delete cluster]: ', JSON.stringify(data));
        data.success.should.equal(true);
        mm.restore();
        done();
      });
  });

  it('success put /wechat/cluster/status', (done) => {
    const body = {
      userId: 1,
      idList: [1, 2, 3],
      dataStatus: '002',
    };
    request
      .put('/cluster/status')
      .send(body)
      .set('Accept', 'appliction/json')
      .expect(200)
      .end((err, res) => {
        const data = res.body;
        data.success.should.equal(true);
        mm.restore();
        done();
      });
  });
});
