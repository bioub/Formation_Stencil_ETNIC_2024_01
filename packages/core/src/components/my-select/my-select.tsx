import { Component, Element, Event, EventEmitter, Host, Listen, Method, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'my-select',
  styleUrl: 'my-select.css',
  shadow: true,
})
export class MySelect {
  @Prop({ mutable: true }) value = '';
  @Prop() items: string[] = [];

  @State() menuIsOpen = false;

  @Event() valueChange: EventEmitter<string>;

  @Element() hostEl: HTMLMySelectElement;

  @Method()
  async openMenu() {
    this.menuIsOpen = true;
  }

  // https://javascript.info/bubbling-and-capturing
  // Pour ne pas refermer le menu juste après l'avoir ouvert, on peut commencer par le fermer :
  // @Listen('click', { target: 'window', capture: true })
  // handleWindowClick() {
  //   this.menuIsOpen = false;
  // }

  // Pour ne pas refermer le menu juste après l'avoir ouvert, on peut tester si le click à eu lieu à l'extérieur du
  // composant avec event.target et une ref sur la balise hote récupérée avec @Element
  @Listen('click', { target: 'window' })
  handleWindowClick(event: PointerEvent) {
    if (!this.hostEl.contains(event.target as HTMLElement)) {
      this.menuIsOpen = false;
    }
  }

  @Watch('value')
  validateValueIsInItems() {
    if (!this.items.includes(this.value)) {
      throw new Error('my-select Error: value must be present in items');
    }
  }

  handleValueClick = () => {
    this.menuIsOpen = !this.menuIsOpen;
  };

  handleItemClick(item: string) {
    this.value = item;
    this.valueChange.emit(item);
    this.menuIsOpen = false;
  };

  render() {
    return (
      <Host>
        <div class="value" onClick={this.handleValueClick}>
          {this.value}
        </div>
        {this.menuIsOpen && (
          <div class="menu">
            {this.items.map(item => (
              <div key={item} class="item" onClick={() => this.handleItemClick(item)}>
                {item}
              </div>
            ))}
          </div>
        )}
      </Host>
    );
  }
}
