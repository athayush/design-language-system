import { useEffect, type ReactElement } from "react";
import type { Preview, Decorator } from "@storybook/react";
import "../src/styles/index.css";

// eslint-disable-next-line react-refresh/only-export-components
function ThemeProvider({ Story, theme }: { Story: () => ReactElement; theme: string }) {
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return <Story />;
}

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme;
  return <ThemeProvider Story={Story} theme={theme} />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "button-name",
            enabled: false,
          },
          {
            id: "aria-valid-attr-value",
            enabled: false,
          },
        ],
      },
    }
  },
};

export default preview;