import { View, Text, Button } from 'react-native';
import { styles } from '../themes/styles';
import { useTheme, useThemeMode } from '@rneui/themed';
import BigText from '../components/bigtext';

export default function Home(props) {
  const { theme, updateTheme } = useTheme();
  const { mode, setMode } = useThemeMode(); //to read or change the mode

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.secondary }]}>
      <Text style={{ margin: theme.spacing.lg, fontSize: 20, color: theme.colors.white }}>Home Page</Text>

      <Text style={{ fontSize: theme.txt.xl, padding: theme.spacing.lg }}>Big Text</Text>
      <BigText title="my text">Our own Component</BigText>

      <Button
        title="Change Theme"
        onPress={() => {
          let obj = { colors: { secondary: 'black' } };
          updateTheme(obj);
        }}
      />
    </View>
  );
}
