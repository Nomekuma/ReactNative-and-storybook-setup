import AsyncStorage from "@react-native-async-storage/async-storage";
import "./storybook.requires";
import { getStorybookUI } from "@storybook/react-native";

const StorybookUIRoot = getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  shouldPersistSelection: false,
});

export default StorybookUIRoot;
