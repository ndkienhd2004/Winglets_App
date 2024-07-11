import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import users from '../../assets/data/user';
const MatchesScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.header}>New Matches</Text>
      </View>
      <View style={styles.users}>
        {users.map(user => (
          <View style={styles.user} key={user.id}>
            <Image source={{uri: user.image}} style={styles.image} />
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default MatchesScreen;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 10,
    flex: 1,
  },
  container: {
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 64,
    height: 64,
    margin: 6,
    borderRadius: 50,

    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
