import { h } from './vnode';

export function createElement(tag, properties, ...children) {
  const newProps: any = {};
  if (properties) {
    for (const key in properties) {
      newProps[key] = properties[key];
    }
  }
  newProps.children = children;
  return h(tag, newProps);
}
