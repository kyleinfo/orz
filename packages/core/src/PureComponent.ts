import Component from './Component';

export default class PureComponent extends Component {
  isPureComponent = true;

  shouldComponentUpdate(nextProps, nextState) {}
}
