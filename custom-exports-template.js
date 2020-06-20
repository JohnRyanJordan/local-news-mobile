// Template for custom-exports (i.e. environment variables) configuration file
// Change file name to custom-exports.js and add your own variables below
import Constants from "expo-constants";
import { Platform } from "react-native";

const iosLocalHost = 'http://localhost:3000/graphql'; // ios accepts Localhost IP
const androidLocalHost = 'http://10.0.2.2:3000/graphql'; // android (requires: "10.0.2.2:PORT" representation of localhost)

const localhost = Platform.OS === "ios" ? iosLocalHost : androidLocalHost;

const ENV =  {
  dev: {
    awsConfig: {
      Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'COGNITO_IDENTITY_POOL_ID',
        // REQUIRED - Amazon Cognito Region
        region: 'REGION',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'COGNITO_USER_POOL_ID',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: 'COGNITO_CLIENT_ID',
      },
      API: {
        // Use <localhost> if you want to run api locally
        graphql_endpoint: 'GRAPHQL_API_ENDPOINT',
        graphql_endpoint_iam_region: 'GRAPHQL_REGION'
      },
      Storage: {
        bucket: 'S3_STORAGE_BUCKET', //REQUIRED -  Amazon S3 bucket
        region: 'S3_BUCKET_REGION', //OPTIONAL -  Amazon service region
      }
    },
    sentryConfig: {
      dsn: 'SENTRY_DSN_KEY',
      enableInExpoDevelopment: false,    // NOTE: Toggle true if needed in development
      debug: true
    },
    amplitudeConfig: 'AMPLITUDE_KEY'
  },
  prod: {
    awsConfig: {
      Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'COGNITO_IDENTITY_POOL_ID',
        // REQUIRED - Amazon Cognito Region
        region: 'REGION',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'COGNITO_USER_POOL_ID',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: 'COGNITO_CLIENT_ID',
      },
      API: {
        // Use <localhost> if you want to run api locally
        graphql_endpoint: 'GRAPHQL_API_ENDPOINT',
        graphql_endpoint_iam_region: 'GRAPHQL_REGION'
      },
      Storage: {
        bucket: 'S3_STORAGE_BUCKET', //REQUIRED -  Amazon S3 bucket
        region: 'S3_BUCKET_REGION', //OPTIONAL -  Amazon service region
      }
    },
    sentryConfig: {
      dsn: 'SENTRY_DSN_KEY',
      enableInExpoDevelopment: false,    // NOTE: Toggle true if needed in development
      debug: true
    },
    amplitudeConfig: 'AMPLITUDE_KEY'
  }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
 // __DEV__ is set to true when react-native is running in Dev mode.
 // __DEV__ is true when run locally, but false when published.
  if (__DEV__) {
    return ENV.dev;
  } else if (env === 'staging') {
    return ENV.staging;
  } else if (env === 'prod') {
    return ENV.prod;
  }
};

export default getEnvVars;
