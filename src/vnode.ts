export interface VNode {
  $$typeof: symbol | number;
  type: string | number | Function;
  props;
  key: string;
  ref?;
}

export const REACT_ELEMENT_TYPE = 0xeac7;

export function h(type, props, key?: string, ref?): VNode {
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
  };
}
