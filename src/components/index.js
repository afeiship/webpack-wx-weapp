// import some packages:
import NxWeappStorage from 'next-weapp-storage';
import Config from 'services/config';
/*===services start===*/
export const $api = require('services/api').default;
export const $config = Config;
export const $http = require('services/http').default;
export const $image = require('services/image').default;
export const $route = require('services/route').default;
export const $interaction = require('services/interaction').default;
export const $storage = new NxWeappStorage(Config.STORE_PREFIX);
/*===services end===*/
