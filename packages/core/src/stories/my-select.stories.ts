import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta<typeof HTMLMySelectElement> = {
  title: 'Components/<my-select>',
  component: 'my-select',
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  parameters: {

  }
};

export default meta;

export const Example: StoryObj<HTMLMySelectElement> = {
  render: args => {
    const mySelectEl = document.createElement('my-select');
    mySelectEl.value = args.value;
    mySelectEl.items = args.items;
    return mySelectEl;
  },
  args: {
    value: 'Romain',
    items: ['Romain', 'Sylvian']
  },
};
