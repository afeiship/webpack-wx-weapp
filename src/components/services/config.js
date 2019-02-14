const ENV = require(`environments/__BUILD_ENV__`).default;

export default class {
  static APIS = {
    host: ENV.HOST,
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
  static STORE_PREFIX = 'wx-weapp';
  static MONKEY_BUSY_MSG = '程序猿开紧张开发中...';
}
