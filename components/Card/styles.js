import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    margin: 5,
    backgroundColor: Colors.base,
  },
  thumbnail: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    backgroundColor: Colors.overlayTextBackground,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
  },
  titleText: {
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 14,
    color: Colors.base,
  },
});