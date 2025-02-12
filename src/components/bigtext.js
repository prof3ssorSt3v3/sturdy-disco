import { Text } from '@rneui/themed';
import { useTheme } from '@rneui/themed';
import { styles } from '../themes/styles';

export default function BigText({ children, title }) {
  const { theme } = useTheme();

  return <Text style={[styles.txt, { fontSize: theme.txt.xl, padding: theme.spacing.lg }]}>{title}</Text>;
}

/*
import BigText from './bigtext.js';//for the above

import {BigText} from  './bigtext.js';//for the below

export function BigText({ children }) {
  const { theme } = useTheme();

  return <Text style={{ fontSize: theme.txt.xl, padding: theme.spacing.lg }}>{children}</Text>;
}
*/
