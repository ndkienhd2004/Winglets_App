import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native';

const LikedScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.header}>Liked You</Text>
      <Text style={styles.text}>
        When people are into you, they'll appear here. Enjoy.
      </Text>
      <Text></Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '400',
    color: 'black',
  },
});
export default LikedScreen;
