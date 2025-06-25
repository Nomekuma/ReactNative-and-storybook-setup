import type { Meta, StoryObj } from "@storybook/react";
import { View, Text } from "react-native";
import ThemeToggle from "./theme-toggle.native";
import { ThemeToggleProps } from "./theme-toggle.types";

const meta: Meta<ThemeToggleProps> = {
  title: "Components/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    toggleType: {
      control: { type: "select" },
      options: ["icon", "text", "custom"],
      description: "The type of toggle display",
    },
    lightThemeText: {
      control: { type: "text" },
      description: "Text to show when switching to light theme",
    },
    darkThemeText: {
      control: { type: "text" },
      description: "Text to show when switching to dark theme",
    },
    onToggle: {
      action: "theme-toggled",
      description: "Callback when theme is toggled",
    },
    lightThemeIcon: {
      control: { type: "text" },
      description: "Icon to show when switching to light theme",
    },
    darkThemeIcon: {
      control: { type: "text" },
      description: "Icon to show when switching to dark theme",
    },
    customToggle: {
      control: { type: "text" },
      description: "Custom toggle component to use instead of default",
    },
    customToggleStyle: {
      control: { type: "object" },
      description: "Style for the custom toggle component",
    },
    style: {
      control: { type: "object" },
      description: "Style for the toggle container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toggleType: "icon",
  },
};

export const TextToggle: Story = {
  args: {
    toggleType: "text",
    lightThemeText: "Light Mode",
    darkThemeText: "Dark Mode",
  },
};

export const CustomTextLabels: Story = {
  args: {
    toggleType: "text",
    lightThemeText: "☀️ Light",
    darkThemeText: "🌙 Dark",
  },
};

export const CustomIcons: Story = {
  args: {
    toggleType: "icon",
    lightThemeIcon: <Text style={{ fontSize: 20 }}>☀️</Text>,
    darkThemeIcon: <Text style={{ fontSize: 20 }}>🌚</Text>,
  },
};

export const CustomToggle: Story = {
  args: {
    toggleType: "custom",
    customToggle: (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ fontSize: 16 }}>🎨</Text>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>Theme</Text>
      </View>
    ),
  },
};

export const CustomStyling: Story = {
  args: {
    toggleType: "icon",
    style: {
      borderRadius: 25,
      padding: 15,
      elevation: 5,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  },
};

export const LargeTextToggle: Story = {
  args: {
    toggleType: "text",
    lightThemeText: "LIGHT",
    darkThemeText: "DARK",
    style: {
      padding: 20,
      borderRadius: 30,
    },
  },
};

export const MinimalIcon: Story = {
  args: {
    toggleType: "icon",
    style: {
      padding: 5,
      borderRadius: 15,
      elevation: 1,
    },
  },
};

export const EmojiToggle: Story = {
  args: {
    toggleType: "custom",
    customToggle: <Text style={{ fontSize: 24 }}>👍🏿</Text>,
  },
};

export const ShortLabels: Story = {
  args: {
    toggleType: "text",
    lightThemeText: "L",
    darkThemeText: "D",
    style: {
      padding: 12,
      minWidth: 40,
      borderRadius: 20,
    },
  },
};

export const DifferentSizeIcons: Story = {
  args: {
    toggleType: "icon",
    lightThemeIcon: <Text style={{ fontSize: 24 }}>💡</Text>,
    darkThemeIcon: <Text style={{ fontSize: 24 }}>🕳️</Text>,
  },
};

export const ComplexCustomToggle: Story = {
  args: {
    toggleType: "custom",
    customToggle: (
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Text style={{ fontSize: 16 }}>🎨</Text>
        <Text style={{ fontSize: 10, fontWeight: "500" }}>Switch</Text>
      </View>
    ),
    style: {
      borderRadius: 15,
      padding: 8,
    },
  },
};
