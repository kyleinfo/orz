export const enum VType {
  Text = 1,
  Node = 1 << 1,
  Composite = 1 << 2,
  Void = 1 << 4,
  Portal = 1 << 5,
}

export interface VText {
  vtype: VType;
  text: string | number;
  dom: Text | null;
}

export interface VVoid {
  vtype: VType;
  dom: Text | null;
}

export interface ComponentLifecycle<P, S> {
  componentWillMount?(): void;
  componentDidMount?(): void;
  componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
  shouldComponentUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): boolean;
  componentWillUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): void;
  componentDidUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
    nextContext: any,
  ): void;
  componentWillUnmount?(): void;
  componentDidCatch?(error?): void;
  getDerivedStateFromProps?(
    nextProps: Readonly<P>,
    prevState: Readonly<S>,
  ): object | null;
  getDerivedStateFromError?(error?): object | null;
  getSnapshotBeforUpdate?(
    nextProps: Readonly<P>,
    nextState: Readonly<S>,
  ): object | null;
}

export interface Refs {
  [k: string]: any;
}

export interface Component<P, S> extends ComponentLifecycle<P, S> {
  state: Readonly<S>;
  props: Readonly<P> & Readonly<any>;
  context: any;
  _dirty: boolean;
  _disable: boolean;
  _rendered: any;
  _parentComponet: Component<any, any>;
  prevProps: P;
  prevState: S;
  prevContext: object;
  isReactComponent: object;
  dom: any;
  vnode: any;
  clearCalBacks: () => void;
  getState(): S;
  refs: Refs;
  render(props?, contenxt?): any;
}
