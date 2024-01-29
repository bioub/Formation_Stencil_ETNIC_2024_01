import { Component, ComponentInterface, Host, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-clock',
  styleUrl: 'my-clock.css',
  shadow: true,
})
export class MyClock implements ComponentInterface {
  @State() now = new Date();
  @Prop() delay = 1000;

  @Watch('delay')
  delayChanged(newDelay: number, oldDelay: number) {
    console.log('new delay', newDelay);
    console.log('old delay', oldDelay);
  }

  spanEl: HTMLSpanElement;

  componentDidLoad() {
    console.log('span', this.spanEl.innerText);

    setInterval(() => {
      this.now = new Date();
    }, this.delay);
  }

  render() {
    return (
      <Host class={'delay-' + this.delay}>
        {this.now.toLocaleTimeString()} (rafraichissement : {this.delay}ms)
      </Host>
    );
  }
}
