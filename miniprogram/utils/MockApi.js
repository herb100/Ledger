const Mock = require('./Mock')
const config = require('../config')

Mock.mock(config.BaseUrl + '/type', {
  "code": 200,
  "data|1-20": [{
    "name": function () {
      return Mock.Random.cname()
    },
    "lastLogin": function () {
      return Mock.Random.datetime()
    }
  }]
})