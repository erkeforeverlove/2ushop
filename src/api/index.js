/*
包含n个接口请求函数
函数返回值promise对象
*/
import ajax from './ajax'
// 1、根据经纬度获取位置详情(#1根据经纬度获取位置详情)
export const reqAddress = (geohash) =>ajax('/postion/${geohash}')
// 2、获取食品分类列表(#2获取食品分类列表)
export const reqFoodTypes = () =>ajax('/index_category')
// 3、根据经纬度获取商铺列表(#3根据经纬度获取商铺列表)
export const reqShops = (longitude,latitude) =>ajax('/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表(#4根据经纬度和关键字搜索商铺列表)
// 5、获取一次性验证码(#5获取一次性验证码)
// 6、用户名密码登陆(#6用户名密码登陆)
// 7、发送短信验证码(#7发送短信验证码)
// 8、手机号验证码登陆(#8手机号验证码登陆)
// 9、根据会话获取用户信息(#9根据会话获取用户信息)
