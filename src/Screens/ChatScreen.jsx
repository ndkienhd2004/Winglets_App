import React, {useState} from 'react';
import {Image, ScrollView, TextInput} from 'react-native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ReceivedMessage from '../Components/ReceivedMessage';
import SendMessage from '../Components/SendMessage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Zocial from 'react-native-vector-icons/Zocial';
const ChatScreen = ({route, navigation}) => {
  const {chat} = route.params;
  const [input, setInput] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={36} color="#E73688" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.user}>
          <View style={styles.chatImageContainer}>
            <Image source={{uri: chat.image}} style={styles.chatImage} />
          </View>
          <Text style={styles.messageHeader}>{chat.name}</Text>
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Zocial name="call" size={30} marginRight={10} color="#E73688" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={30} color="#E73688" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <ReceivedMessage
            msg="Hello there"
            picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
          />
          <SendMessage msg="Hello there" />
          <ReceivedMessage
            msg="Hello there"
            picture="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTL74bZ_93ChBXxgFksYUkF40V-4AXCbojm8Q&usqp=CAU"
          />
          <SendMessage msg="Hello there" />
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.icon}>
          <Entypo name="grid" size={24} color="#E73688" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <FontAwesome5 name="camera" size={24} color="#E73688" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <AntDesign name="picture" size={24} color="#E73688" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="microphone" size={24} color="#E73688" />
        </TouchableOpacity>

        <View style={styles.sendMsgContainer}>
          <TextInput
            placeholder="Aa"
            style={styles.input}
            onChangeText={text => setInput(text)}
          />
          <Entypo name="emoji-happy" size={16} color="#E73688" />
        </View>

        <TouchableOpacity style={styles.icon}>
          {input === '' ? (
            <AntDesign name="like1" size={24} color="#E73688" />
          ) : (
            <FontAwesome name="send" size={24} color="#E73688" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    flexGrow: 1,
  },
  screenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 1,
    marginBottom: 20,
  },
  messageHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    marginLeft: 5,
  },
  chatImageContainer: {
    marginRight: 10,
  },
  chatImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  inputContainer: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 3,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  sendMsgContainer: {
    flex: 1,
    backgroundColor: 'rgba(211,211,211,0.5)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '70%',
    marginHorizontal: 10,
  },
  icon: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ChatScreen;
