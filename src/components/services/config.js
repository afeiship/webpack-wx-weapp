const ENV = require(`environments/__BUILD_ENV__`).default;

export default class {
  static APIS = {
    host: ENV.HOST,
    request: ['/apiv1', 'json'],
    items: [
      {
        items: {
          signin: ['post', '/tu/user/signin/wechat'],
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
  static APP_CONFIG = {
    app_type: 'junzhi_fixedincome',
    app_secret: 'd21ed72e-0c45-4d7e-8dc7-43f4dda43928',
    from: 'wechatms',
    platform: 'wechat'
  };
}
