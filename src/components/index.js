// import some packages:
import NxWeappStorage from 'next-weapp-storage';

/*===services start===*/
export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $http = require('services/http').default;
export const $image = require('services/image').default;
export const $route = require('services/route').default;
export const $storage = new NxWeappStorage();
/*===services end===*/
