import { Meta, Story } from '@storybook/react';
import Main from '.';

const MainSetting: Meta = {
  title: 'Main',
  component: Main,
};

export const Basic: Story = (args) => (
  <Main {...args} />
);

export default MainSetting;
