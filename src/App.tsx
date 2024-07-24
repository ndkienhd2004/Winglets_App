import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import MatchesScreen from './Screens/MatchesScreen';
import CustomTabBar from './Components/CustomTabBar';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: 500,
              paddingTop: 0,
            },
            tabBarActiveTintColor: '#E73688',
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Matches" component={MatchesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
