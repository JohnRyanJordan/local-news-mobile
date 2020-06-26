import * as React from 'react';
import { View, Text, TouchableOpacity, FlatList  } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { QUERY_ARTICLES_BYMONTHYEAR } from '../../graphql';
import { Card } from '../../components/Card';
import styles from './styles';

export default function HomeScreen({navigation}) {

  const _keyExtractor = (item, index) => item.articleid;

  const _renderArticleItem = ({item: article}) => (
    <TouchableOpacity
      style={styles.feedItemContainer}
      onPress={() => onArticlePress(article)}>
      <Card article={article} />
    </TouchableOpacity>
  )

  var currentMonthYear = (new Date()).toISOString().split('T')[0].slice(0, -3); // Get new iso date formatted (yyyy-mm)

  const { loading, error, data, refetch, networkStatus } = useQuery(QUERY_ARTICLES_BYMONTHYEAR, { variables: { monthYear: currentMonthYear, first: 4 }});

  if (loading) return <Text> Loading... </Text>;
  if (error) return <Text> Error! ${error.message} </Text>;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.feedContainer}
        numColumns={1}
        data={data.queryArkansasNewsByMonthYearDatePublishedIndex.items}
        refreshing={networkStatus === 4}
        onRefresh={() => refetch}
        keyExtractor={_keyExtractor}
        renderItem={_renderArticleItem}
      />
    </View>
  );

  function onArticlePress(articleData) {
    navigation.navigate('ContentModal', { article: articleData });
  }
}

HomeScreen.navigationOptions = {
  header: null,
};