import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ContentModal({ route, navigation }) {

  const { article } = route.params;
  var parsedContent = JSON.parse(article.content)

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> {article.title} </Text>
      <WebView source={{ html: parsedContent[0].value }} />
    </View>
  );
}