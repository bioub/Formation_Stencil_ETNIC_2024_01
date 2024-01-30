import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta<typeof HTMLMyComponentElement> = {
  title: 'Components/<my-component>',
  component: 'my-component',
  //👇 Enables auto-generated documentation for the component story
  tags: ['autodocs'],
  parameters: {
    
  }
};

export default meta;

export const Example: StoryObj<HTMLMyComponentElement> = {
  render: args => {
    return `<my-component first="${args.first}" middle="${args.middle}" last="${args.last}"></my-component>`;
  },
  args: {
    first: 'Winnie',
    middle: 'The',
    last: 'Pooh',
  },
};
