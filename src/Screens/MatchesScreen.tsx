import React from 'react';
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 10,
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
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default MatchesScreen;
