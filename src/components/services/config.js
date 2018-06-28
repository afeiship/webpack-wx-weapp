export default class Config {

  static IMG_URL = 'http://testimg.demo.cn';
  static APIS = {
    baseUrl: `http://192.168.1.238:8080`,
    items: {
      '/backend': {
        // global:
        'login': ['post', '/adminUser/login'],
        'logout': ['post', '/adminUser/logout']
      }
    }
  };
  static MONKEY_BUSY_MSG = '程序猿开紧张开发中...';

}



