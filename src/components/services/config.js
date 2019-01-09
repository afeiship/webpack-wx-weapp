export default class {
  static IMG_URL = 'http://testimg.demo.cn';
  static APIS = {
    host: 'http://dev.demo.cn',
    request: ['/api/vi', 'json'],
    items: [
      {
        items: {
          upload: ['post', '/system/upload'],
          login: ['post', '/auth/admin/signin'],
          subscription_index: ['get', '/system/subscription'],
          subscription_create: ['post', '/system/subscription'],
          subscription_delete: ['delete', '/system/subscription/{id}'],
          subscription_update: ['delete', '/system/subscription/{id}']
        }
      }
    ]
  };
  static MONKEY_BUSY_MSG = '程序猿开紧张开发中...';
}
