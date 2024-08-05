import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ReceivedMessage = ({msg, picture}) => {
  return (
    <View style={styles.container}>
      <View style={styles.proPicContainer}>
        <Image style={styles.proPic} source={{uri: picture}} />
      </View>
      <View style={styles.msgContainer}>
        <Text style={styles.msg}>{msg}</Text>
      </View>
    </View>
  );
};

export default ReceivedMessage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    maxWidth: '80%',
    alignItems: 'center',
  },
  msgContainer: {
    backgroundColor: '#9EA2A5',
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
  },
  msg: {
    color: 'black',
    fontWeight: '500',
    fontSize: 16,
  },
  proPicContainer: {
    paddingRight: 10,
    justifyContent: 'center',
  },
  proPic: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});
