// import some packages:
import NxWeappStorage from 'next-weapp-storage';

/*===services start===*/
export const $api = require('services/api').default;
export const $config = require('services/config').default;
export const $http = require('services/http').default;
export const $image = require('services/image').default;
export const $store = new NxWeappStorage('wtm');
/*===services end===*/
