const MockConfig = {
  mockDebug: true,
}

let baseUrl = ''
if (MockConfig.mockDebug) {
  baseUrl = 'https://www.myMock.com'
}

module.exports = {
  "MockConfig": MockConfig,
  "BaseUrl": baseUrl
}