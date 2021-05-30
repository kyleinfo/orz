export class Component {
  constructor(props) {}

  setState(state, callback?) {}

  render() {
    throw new Error('must implement render!');
  }
}
