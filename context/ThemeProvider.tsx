import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = '@theme_preference';

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: 'light',
  setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const stored = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (stored === 'light' || stored === 'dark') {
          setColorScheme(stored);
        }
      } catch (error) {
        console.error('Error loading theme:', error);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    const saveTheme = async () => {
      if (colorScheme) {
        try {
          await AsyncStorage.setItem(THEME_STORAGE_KEY, colorScheme);
        } catch (error) {
          console.error('Error saving theme:', error);
        }
      }
    };

    saveTheme();
  }, [colorScheme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: colorScheme as Theme,
        setTheme: setColorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
