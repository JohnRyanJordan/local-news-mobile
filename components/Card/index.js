import * as React from 'react';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';
import styles from './styles';

export function Card(props) {
  return (
    <View style={styles.container} testID={'container'}>
      <ImageBackground style={styles.thumbnail} source={ __DEV__ ? require('../../assets/images/robot-dev.png') : { uri: props.article.image }} testID={'backgroundImage'} >
        <View style={styles.header}>
          <Text style={styles.titleText} testID={'titleText'}>{props.article.title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}