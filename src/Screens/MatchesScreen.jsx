import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import users from '../../assets/data/user';
import chats from '../../assets/data/chats';
import {useNavigation} from '@react-navigation/native';

const MatchesScreen = () => {
  const [pressedChatId, setPressedChatId] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text style={styles.header}>Chats</Text>
      </View>
      <View>
        <Text style={styles.text}>Your Matches</Text>
      </View>
      <View style={styles.users}>
        {users.map(user => (
          <View style={styles.user} key={user.id}>
            <Image source={{uri: user.image}} style={styles.image} />
          </View>
        ))}
      </View>

      <View>
        <Text style={styles.text}>Messages</Text>
      </View>
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          {chats.map(chat => (
            <TouchableOpacity
              style={[
                styles.chatContainer,
                pressedChatId === chat.id && styles.chatContainerPressed,
              ]}
              key={chat.id}
              onPressIn={() => setPressedChatId(chat.id)}
              onPressOut={() => setPressedChatId('')}
              onPress={() => {
                console.log(`Pressed chat with ID: ${pressedChatId}`);
                navigation.navigate('ChatScreen', {chat});
              }}>
              <View style={styles.chatImageContainer}>
                <Image source={{uri: chat.image}} style={styles.chatImage} />
              </View>
              <View style={styles.chatTextContainer}>
                <Text style={styles.chatName}>{chat.name}</Text>
                <Text
                  style={styles.chatLastMessage}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {chat.lastMessage}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <View style={{height: 120}} />
        </ScrollView>
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
    color: 'black',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '400',
    color: 'black',
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
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
  },
  chatContainerPressed: {
    backgroundColor: '#FAC5DE',
  },
  chatImageContainer: {
    marginRight: 10,
  },
  chatImage: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  chatTextContainer: {
    flex: 1,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  chatLastMessage: {
    fontSize: 16,
    color: 'gray',
    flexShrink: 1,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
});

export default MatchesScreen;
