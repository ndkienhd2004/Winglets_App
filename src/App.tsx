import {StyleSheet, View} from 'react-native';
import Card from './WingletsCard/WingletsCard';
import MatchesScreen from './Screens/MatchesScreen';
const App = () => {
  return (
    <View style={styles.pageContainer}>
      {/* <Card /> */}
      <MatchesScreen />
    </View>
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
