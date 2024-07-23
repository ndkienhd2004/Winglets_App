import {StyleSheet, View} from 'react-native';
import MatchesScreen from './Screens/MatchesScreen';
import HomeScreen from './Screens/HomeScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={styles.pageContainer}>
      <HomeScreen />
      {/* <MatchesScreen /> */}
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
