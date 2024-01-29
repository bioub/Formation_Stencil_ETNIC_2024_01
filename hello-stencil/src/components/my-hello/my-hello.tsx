import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-hello',
  styleUrl: 'my-hello.css',
  shadow: true,
  // scoped: true,
})
export class MyHello {
  render() {
    const name = <b>Romain</b>;
    const now = new Date();
    return (
      <div>
        <div>Hello {name}</div>
        <div>Il est {now.toLocaleTimeString()}</div>
      </div>
    );
  }
}
