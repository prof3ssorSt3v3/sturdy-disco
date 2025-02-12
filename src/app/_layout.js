import { Stack } from 'expo-router';
import { ThemeProvider } from '@rneui/themed';
import { theme } from '../themes/theme';

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack />
    </ThemeProvider>
  );
}
