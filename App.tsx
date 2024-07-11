import {StyleSheet, View} from 'react-native';
import Card from './components/WingletsCard/WingletsCard';

const App = () => {
  return (
    <View style={styles.pageContainer}>
      <Card />
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
