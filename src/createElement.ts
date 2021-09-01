import { isFunction, isString, isUndefind } from './types';
import { h } from './vnode';

export function createElement(tag, properties, ...children) {
  if (isString(tag)) {
    const newProps: any = {};
    if (properties) {
      for (const key in properties) {
        newProps[key] = properties[key];
      }
    }
    newProps.children = children;
    return h(tag, newProps);
  } else if (isFunction(tag)) {
    const newProps: any = {};
    if (properties) {
      for (const key in properties) {
        newProps[key] = properties[key];
      }
    }
    const props = tag.defaultProps;
    if (props) {
      for (const key in props) {
        if (isUndefind(newProps[key])) {
          newProps[key] = props[key];
        }
      }
    }
    newProps.children = children;
    return h(tag, newProps);
  }
}
