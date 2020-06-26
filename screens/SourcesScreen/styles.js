import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.base,
  },
  feedContainer: {
  },
  feedItemContainer: {
  },
  sourceItem: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSourceItem: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.tabSelectedUnderline,
    borderBottomWidth: 2,
  },
  sourceItemText: {
    color: Colors.baseText,
  },
  selectedSourceItemText: {
    color: Colors.tabIconSelected,
  },
});