export default class Component {
  context;
  props;
  refs;
  state;
  updater;

  constructor(props, context) {
    this.context = context;
    this.props = props || {};
    this.refs = {};
    this.state = null;
  }

  setState() {}

  forceUpdate() {}

  render() {}
}
