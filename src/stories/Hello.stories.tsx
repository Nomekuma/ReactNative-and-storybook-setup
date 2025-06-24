import React from 'react';
import { Text } from 'react-native';
import { Meta } from '@storybook/react';

export default {
  title: 'Hello',
} as Meta;

export const Basic = () => <Text>Hello from Storybook</Text>;
