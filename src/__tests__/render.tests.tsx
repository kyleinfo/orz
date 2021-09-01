import { render } from '../render';
import { createElement } from '../createElement'

describe('render', () => {
  it('use createElement', () => {
    expect(createElement('div', null).type).toBe('div');
  });

  it('render vnode', () => {
    const now = new Date().toLocaleDateString();
    function tick(now) {
      const element = (
        <div style="background: red">
          <h1>Hello, World!</h1>
          <h2>It is {now}.</h2>
        </div>
      )
      return render(element, document.createElement('div'));
    }
    const div = document.createElement('div');
    div.appendChild(tick(now));
    expect(div.innerHTML).toBe(`<div><h1>Hello, World!</h1><h2>It is ${now}.</h2></div>`)
  })
});