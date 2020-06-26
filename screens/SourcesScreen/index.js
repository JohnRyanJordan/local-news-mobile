import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { useFetch } from '../../hooks/useFetch';
import { QUERY_ARTICLES_BYSOURCE } from '../../graphql';
import { Card } from '../../components/Card';
import styles from './styles';

export default function SourcesScreen({navigation}) {
  const [selectedSource, setSelectedSource] = useState("KNWA FOX24");

  const [ loading, error, data ] = useFetch("https://raw.githubusercontent.com/JohnRyanJordan/local-news-backend/master/sources.json");
  const { loading: loadingArticles, error: errorArticles, data: dataArticles, refetch, networkStatus } = useQuery(QUERY_ARTICLES_BYSOURCE, { variables: { source: selectedSource, first: 4 }});

  const _sourceKeyExtractor = (item, index) => item.source;
  const _renderSourceItem = ({item: source}) => (
    <TouchableOpacity
      style={(source.source == selectedSource) ? styles.selectedSourceItem : styles.sourceItem}
      onPress={() => setSelectedSource(source.source)}>
      <Text style={(source.source == selectedSource) ? styles.selectedSourceItemText : styles.sourceItemText}> {source.source} </Text>
    </TouchableOpacity>
  )

  const _articleKeyExtractor = (item, index) => item.articleid;
  const _renderArticleItem = ({item: article}) => (
    <TouchableOpacity
      style={styles.feedItemContainer}
      onPress={() => onArticlePress(article)}>
      <Card article={article} />
    </TouchableOpacity>
  )

  if (loading || loadingArticles) return <Text> Loading... </Text>;
  if (error) return <Text> Error! ${error.message} </Text>;
  if (errorArticles) return <Text> Error! ${errorArticles.message} </Text>;

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.feedContainer}
        numColumns={1}
        data={data.sources}
        horizontal={true}
        keyExtractor={_sourceKeyExtractor}
        renderItem={_renderSourceItem}
      />

      <FlatList
        style={styles.feedContainer}
        numColumns={1}
        data={dataArticles.queryArkansasNewsBySourceDatePublishedIndex.items}
        refreshing={networkStatus === 4}
        onRefresh={() => refetch}
        keyExtractor={_articleKeyExtractor}
        renderItem={_renderArticleItem}
      />
    </View>
  );

  function onArticlePress(articleData) {
    navigation.navigate('ContentModal', { article: articleData });
  }
}
