import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.base,
  },
  titleText: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.baseText,
  },
});