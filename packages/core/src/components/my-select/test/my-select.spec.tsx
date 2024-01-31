import { newSpecPage } from '@stencil/core/testing';
import { MySelect } from '../my-select';

describe('my-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MySelect],
      html: `<my-select></my-select>`,
    });
    expect(page.root).toEqualHtml(`
      <my-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-select>
    `);
  });
});
