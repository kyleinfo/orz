import { getTypeof, isFunction, isString, isArray } from './types';
import { REACT_ELEMENT_TYPE } from './vnode';

export function render(vnode, container: HTMLElement) {
  if (container == null || container.nodeType !== 1) {
    throw new Error('container must be Element!');
  }

  let component;
  const prevVNode = (container as any)._component;
  if (prevVNode) {
    component = patch(prevVNode, vnode, container);
  } else {
    component = mount(vnode, container);
  }

  (container as any)._component = component;

  return component;
}

function patch(prev, vnode, parent: HTMLElement) {
  return mount(vnode, parent);
}

function mount(vnode, parent: HTMLElement) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  return creatDom(vnode, parent);
}

function creatDom(vnode, parent?: HTMLElement) {
  if (vnode == null) return;
  let dom;
  if (vnode.$$typeof === REACT_ELEMENT_TYPE) {
    const ctor = vnode.type;
    if (isString(ctor)) {
      dom = document.createElement(ctor);
      applyProps(dom, vnode.props);
    } else if (isFunction(ctor)) {
      if (isFunction(ctor.prototype?.render)) {
        const instance = new (ctor as any)(vnode.props);
        vnode = instance.render();
      } else {
        vnode = ctor(vnode.props);
      }
      return creatDom(vnode, parent);
    }
  } else {
    const type = getTypeof(vnode);
    switch (type) {
      case 'boolean':
        break;
      case 'string':
      case 'number':
        dom = document.createTextNode(String(vnode));
        break;
    }
  }

  if (dom) {
    applyProps(dom, vnode.props);
    const children = vnode.props?.children;
    if (children) {
      if (isArray(children)) {
        for (const child of children) {
          creatDom(child, dom);
        }
      } else {
        creatDom(children, dom);
      }
    }
    if (isFunction(parent?.appendChild)) {
      parent.appendChild(dom);
    }
  }

  return dom;
}

const skipProps = ['children', 'ref', 'key'];

function applyProps(dom: Element, props) {
  for (const propName in props) {
    if (skipProps.includes(propName)) continue;
    const prop = props[propName];
    switch (propName) {
      case 'className':
        dom.className = prop;
        break;
    }
  }
}
