import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

configure(() => {
  require('../src/stories/Hello.stories');
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('Storybook', () => StorybookUIRoot);
export default StorybookUIRoot;
