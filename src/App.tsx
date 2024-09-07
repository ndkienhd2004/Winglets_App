import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';
import MatchesScreen from './Screens/MatchesScreen';
import CustomTabBar from './Components/CustomTabBar';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';
import ProfileScreen from './Screens/ProfileScreen';
import ChatScreen from './Screens/ChatScreen';
import EditProfile from './Screens/EditProfile';
import LikedScreen from './Screens/LikedScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const AuthStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen">
        {props => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    </Stack.Navigator>
  );

  const MainTabNavigator = () => (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontWeight: '500',
          paddingTop: 0,
        },
        tabBarActiveTintColor: '#E73688',
      }}>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Liked You" component={LikedScreen} />
      <Tab.Screen name="Chats" component={MatchesScreen} />
    </Tab.Navigator>
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {isLoggedIn ? (
            <>
              <Stack.Screen
                name="Main"
                component={MainTabNavigator}
                options={{headerShown: false}}
              />
              <Stack.Screen name="ChatScreen" component={ChatScreen} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
            </>
          ) : (
            <Stack.Screen name="Auth" component={AuthStack} />
          )}
        </Stack.Navigator>
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
