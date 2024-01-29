import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-audio',
  styleUrl: 'my-audio.css',
  shadow: true,
})
export class MyAudio {
  @Prop() src: string;

  audioEl: HTMLAudioElement;

  render() {
    return (
      <Host>
        <button onClick={() => this.audioEl.play()}>Play</button>
        <audio src={this.src} ref={(el) => (this.audioEl = el)}></audio>
      </Host>
    );
  }

}
