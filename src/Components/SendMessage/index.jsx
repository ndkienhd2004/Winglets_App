import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SendMessage = ({msg}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#FAB779', '#E73688']}
        style={styles.msgContainer}>
        <Text style={styles.msg}>{msg}</Text>
      </LinearGradient>
    </View>
  );
};

export default SendMessage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  msgContainer: {
    backgroundColor: '#006AFF',
    borderRadius: 20,
    padding: 10,
    maxWidth: '80%',
  },
  msg: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
