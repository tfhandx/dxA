import querystring, { parse } from 'querystring';
import pathRegexp from 'path-to-regexp';
import { Route } from '@/models/connect';
import React, { useEffect, useState } from 'react'
import storage from '@/utils/storage'
import { Menu, Icon, Card } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;


/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const useWindowViewPortChange = () => {
  const [offsetOfWindow, setOffsetOfWindow] = useState(window.document.body.offsetWidth)
  useEffect(() => {
    const resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize'
    const changeSizeOfWindow = () => {
      setOffsetOfWindow(window.document.body.offsetWidth)
    }
    // window.addEventListener('resize', changeSizeOfWindow)
    window.addEventListener(resizeEvt, changeSizeOfWindow, false);
    window.addEventListener(resizeEvt, changeSizeOfWindow, false);
    document.addEventListener('DOMContentLoaded', changeSizeOfWindow, false);
    return () => {
      window.removeEventListener(resizeEvt, changeSizeOfWindow);
      document.removeEventListener('DOMContentLoaded', changeSizeOfWindow);
    }
  })
  return offsetOfWindow;
}
export const isUrl = (path: string): boolean => reg.test(path);

export const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
export const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

export const getPageQuery = () => parse(window.location.href.split('?')[1]);

/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */
export const getAuthorityFromRouter = <T extends Route>(
  router: T[] = [],
  pathname: string,
): T | undefined => {
  const authority = router.find(
    ({ routes, path = '/' }) =>
      (path && pathRegexp(path).exec(pathname)) ||
      (routes && getAuthorityFromRouter(routes, pathname)),
  );
  if (authority) return authority;
  return undefined;
};

export const getRouteAuthority = (path: string, routeData: Route[]) => {
  let authorities: string[] | string | undefined;
  routeData.forEach((route) => {
    // match prefix
    if (pathRegexp(`${route.path}/(.*)`).test(`${path}/`)) {
      if (route.authority) {
        authorities = route.authority;
      }
      // exact match
      if (route.path === path) {
        authorities = route.authority || authorities;
      }
      // get children authority recursively
      if (route.routes) {
        authorities = getRouteAuthority(path, route.routes) || authorities;
      }
    }
  });
  return authorities;
};
var toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty
//  export function isObject(val) {
//     return val !== null && typeof val === 'object';
// }
export function isObject(val) {
  return val !== null && toString.call(val) === '[object Object]';
}
/**
 * Determine if a value is an Array
 *
* @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
export function isArray(val) {
  return toString.call(val) === '[object Array]';
}
export function strInsert(str, length) {
  if (str === undefined || str === '' || str === null) {
    return '非法的序列号'
  }
  let reg = new RegExp("(\\d|[a-z]|[A-Z]){" + length + "}", "g");
  let ma = str.match(reg);
  // let ma = str.match(/(\d|[a-z]|[A-Z]){5}/g);
  return ma.join('-')
}
export const insertSeparator = (arr, fieldName) => {
  if (Array.isArray(arr) && arr.length > 0) {
    return arr.map((item) => {
      if (isObject(item) && item[fieldName] && typeof item[fieldName] === 'string' && item[fieldName].length === 20) {
        return {
          label: strInsert(item[fieldName], 5),
          value: item[fieldName]
        }
      }
      else {
        return null
      }
    }).filter(i => i)
  }
  else {
    return []
  }
}
export function getqueryValueByKey(val) {
  return;
}
export const FormatterData = (data, type) => {
  let result = [];
  let start = '';
  let end = '';
  result.start = start;
  result.end = end;
  let isUser = type === 'user';
  if (!Object.hasOwnProperty.call(data, 'list')) {
    return result
  }
  if (isArray(data.list)) {
    result = data.list.map((item, i) => {
      if (i === 0) {
        start = Object.keys(item)[0];
      }
      if (i === data.list.length - 1) {
        end = Object.keys(item)[0];
      }
      return isUser ? {
        x: Object.keys(item)[0],
        ['userCount']: item[Object.keys(item)[0]][type] / 1000,
      } : {
          x: Object.keys(item)[0],
          ['weighCount']: item[Object.keys(item)[0]][type],
        }
    }
    )
    result.start = start;
    result.end = end;
    return result
  }
  return result
}
export const isAdmin = () => {
  return Boolean(storage.get('uesr') && storage.get('uesr').role && storage.get('uesr').role.indexOf(1) !== -1)
}
export const isSuperNode = () => {
  return true
  // Boolean(storage.get('uesr') && storage.get('uesr').role && storage.get('uesr').role.indexOf(-1) !== -1)
}
export const generateRouterList = (routerList = [], source = []) => {
  if (Array.isArray(source)) {
    for (let i = 0; i < source.length; i++) {
      const item = source[i];
      if (isObject(item) && hasOwnProperty.call(item, 'children') && Array.isArray(item.children) && item.children.length > 0) {
        generateRouterList(routerList, item.children);
      }
      const { path, name } = item;
      routerList.push({ path, name });
    }
  }
};