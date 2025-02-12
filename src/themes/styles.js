import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  txt: {
    fontWeight: 300,
  },
  container: {
    flex: 1,
    //select the one matching object from inside select ({})
    //and spread those properties to add to container
    ...Platform.select({
      android: {
        backgroundColor: 'green',
      },
      ios: {
        backgroundColor: '#e4e4e4',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});

export { styles };
