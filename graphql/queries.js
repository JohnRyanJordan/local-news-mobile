import gql from 'graphql-tag';

const QUERY_ARTICLES = gql`
  query listArkansasNews($filter: TableArkansasNewsFilterInput, $limit: Int, $nextToken: String ) {
    listArkansasNews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      items {
        articleid
        datePublished
        monthYear
        source
        author
        content
        link
        description
        title
      }
    }
  }
`;

const QUERY_ARTICLES_BYSOURCE = gql`
  query queryArkansasNewsBySourceDatePublishedIndex($source: String!, $first: Int, $after: String ) {
    queryArkansasNewsBySourceDatePublishedIndex(source: $source, first: $first, after: $after) {
      nextToken
      items {
        articleid
        datePublished
        monthYear
        source
        author
        content
        link
        description
        title
      }
    }
  }
`;

const QUERY_ARTICLES_BYMONTHYEAR = gql`
query queryArkansasNewsByMonthYearDatePublishedIndex($monthYear: String!, $first: Int, $after: String ) {
  queryArkansasNewsByMonthYearDatePublishedIndex(monthYear: $monthYear, first: $first, after: $after) {
    nextToken
    items {
      articleid
      datePublished
      monthYear
      source
      author
      content
      link
      description
      title
    }
  }
}
`;

export {
  QUERY_ARTICLES,
  QUERY_ARTICLES_BYSOURCE,
  QUERY_ARTICLES_BYMONTHYEAR
}