import ajax from './ajax';
import {API_DOMAIN} from '../utils/constants';

/** 登录模块 */
// 登录授权路由接口
export const reqLogin = (params) => ajax(API_DOMAIN + '/login', params, 'POST');


/** On Page SEO 模块 */

export const reqGetProductList = (params) => ajax(API_DOMAIN + '/api/v1/getAllProducts', params, 'GET'); //获取产品列表
