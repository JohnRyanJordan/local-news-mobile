import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/react-hooks';
import Amplify from 'aws-amplify';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import ContentModal from './screens/ContentModal';

import { client } from './client';
import getEnvVars from './custom-exports';

const { awsConfig } = getEnvVars();

enableScreens();
Amplify.configure(awsConfig);

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <RootNavigator />
          </NavigationContainer>
        </View>
      </ApolloProvider>
    );
  }
}

function RootNavigator() {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Root" component={MainNavigator} />
    </RootStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainStack.Navigator mode="modal" >
      <MainStack.Screen name="Main" component={BottomTabNavigator} />
      <MainStack.Screen name="ContentModal" component={ContentModal} options={{ gestureEnabled: false }}/>
    </MainStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});