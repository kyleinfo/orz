export interface ComponentLifecycle {
  componentWillMount?(): void;
  componentDidMount?(): void;
  componentWillReceiveProps?(): void;
  shouldComponentUpdate?(): boolean;
  componentWillUpdate?(): void;
  componentDidUpdate?(): void;
  componentWillUnmount?(): void;
  componentDidCatch?(): void;
  getDerivedStateFromProps?(): void;
  getDerivedStateFromError?(): void;
  getSnapshotBeforUpdate?(): void;
}
