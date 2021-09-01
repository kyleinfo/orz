export interface VNode {
  $$typeof: symbol | number;
  type: string | number | Function;
  props;
  key: string;
  ref?;
}

export let REACT_ELEMENT_TYPE: symbol | number = 0xeac7;

if (typeof Symbol === 'function') {
  REACT_ELEMENT_TYPE = Symbol.for('0xeac7');
}

export function h(type, props, key?: string, ref?): VNode {
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
  };
}
