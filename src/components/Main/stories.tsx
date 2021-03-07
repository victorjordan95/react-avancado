import { Meta, Story } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Main from '.';

const MainSetting: Meta = {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Basic: Story = () => (
  <Main title={text('Title', 'React Avançado')} />
);

export default MainSetting;
