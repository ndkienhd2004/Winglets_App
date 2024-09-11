import {Image, Modal, StyleSheet, Text, TextInput} from 'react-native';
import {TouchableOpacity, View, Switch} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native';
import profile from '../../assets/data/profile';
const EditProfile = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState(profile.bio || '');
  const [workModalVisible, setWorkModalVisible] = useState(false);
  const [eduModalVisible, setEduModalVisible] = useState(false);
  const [genModalVisible, setGenModalVisible] = useState(false);
  const [locateModalVisible, setLocateModalVisible] = useState(false);
  const [homeModalVisible, setHomeModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(profile.gender || 'Man');
  const [isGenderVisible, setIsGenderVisible] = useState(true);

  const [profileImage, setProfileImage] = useState(profile.avt);
  const chooseImage = async () => {
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 200,
      maxHeight: 200,
      quality: 1,
    });

    if (result.didCancel) {
      console.log('User cancelled image picker');
    } else if (result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setProfileImage(uri);
    } else if (result.errorMessage) {
      console.log('ImagePicker Error: ', result.errorMessage);
    }
  };
  const handleWorkAddPress = () => {
    setWorkModalVisible(true);
  };
  const closeWorkModal = () => {
    setWorkModalVisible(false);
  };
  const handleEducationAddPress = () => {
    setEduModalVisible(true);
  };
  const closeEducationModal = () => {
    setEduModalVisible(false);
  };
  const handleGenderAddPress = () => {
    setGenModalVisible(true);
  };

  const closeGenderModal = () => {
    setGenModalVisible(false);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.screenHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="angle-left" size={36} />
        </TouchableOpacity>
        <Text style={styles.pageHeader}>Winglets</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.pageHeaderContainer}>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={chooseImage}>
            <View style={styles.profileImage}>
              <Image source={{uri: profileImage}} style={styles.image}></Image>
              <View style={styles.imageOverlay}>
                <Feather name="camera" size={26} color={'white'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.fieldsContainer}>
          <View style={styles.fieldItemcontainer}>
            <Text style={styles.fieldItemHeader}>Interests</Text>
            <Text>Get specific about the thing you love.</Text>
            <View>
              <TouchableOpacity style={styles.interestsContainer}>
                <Text style={{fontSize: 20, color: 'black'}}>
                  Add a favourite Interest
                </Text>
                <Icon name="plus" size={20} color={'black'}></Icon>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.fieldItemcontainer}>
            <Text style={styles.fieldItemHeader}>Bio</Text>
            <Text>Write a fun and punchy intro.</Text>
            <TextInput
              placeholder="A little bit about you...."
              style={styles.input}
              value={input}
              onChangeText={text => setInput(text)}
            />
          </View>
          <View style={styles.fieldItemcontainer}>
            <Text style={styles.fieldItemHeader}>About you</Text>
            <View style={styles.tableContainer}>
              <TouchableOpacity
                style={styles.tableRow}
                onPress={handleWorkAddPress}>
                <MaterialIcons name="business-center" size={16} />
                <Text style={styles.tableRowText}>Work</Text>
                <View style={styles.rowEnd}>
                  <Text style={{fontWeight: '500'}}>
                    {profile.work || 'Add'}
                  </Text>
                  <Feather name="chevron-right" size={16} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tableRow}
                onPress={handleEducationAddPress}>
                <Ionicons name="school" size={16} />
                <Text style={styles.tableRowText}>Education</Text>
                <View style={styles.rowEnd}>
                  <Text style={{fontWeight: '500'}}>
                    {profile.education || 'Add'}
                  </Text>
                  <Feather name="chevron-right" size={16} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.tableRow}
                onPress={handleGenderAddPress}>
                <MaterialCommunityIcons name="human" size={16} />
                <Text style={styles.tableRowText}>Gender</Text>
                <View style={styles.rowEnd}>
                  <Text style={{fontWeight: '500'}}>{selectedGender}</Text>
                  <Feather name="chevron-right" size={16} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tableRow}>
                <Entypo name="location" size={16} />
                <Text style={styles.tableRowText}>Location</Text>
                <View style={styles.rowEnd}>
                  <Text style={{fontWeight: '500'}}>
                    {profile.location || 'Add'}
                  </Text>
                  <Feather name="chevron-right" size={16} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tableRow}>
                <Entypo name="home" size={16} />
                <Text style={styles.tableRowText}>Hometown</Text>
                <View style={styles.rowEnd}>
                  <Text style={{fontWeight: '500'}}>
                    {profile.hometown || 'Add'}
                  </Text>
                  <Feather name="chevron-right" size={16} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={false}
        visible={workModalVisible}
        onRequestClose={closeWorkModal}>
        <SafeAreaView style={styles.workModalContainer}>
          <View style={styles.workModalHeaderContainer}>
            <TouchableOpacity onPress={closeWorkModal}>
              <Ionicons name="arrow-back" size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.workModalHeader}>Add a job</Text>
            <TouchableOpacity>
              <Text style={styles.workModalAddButton}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.workModalBody}>
            <TextInput placeholder="Title" style={styles.workModalInput} />
            <TextInput
              placeholder="Company (or just industry)"
              style={styles.workModalInput}
            />
          </View>
        </SafeAreaView>
      </Modal>
      <Modal
        animationType="fade"
        transparent={false}
        visible={eduModalVisible}
        onRequestClose={closeEducationModal}>
        <SafeAreaView style={styles.workModalContainer}>
          <View style={styles.workModalHeaderContainer}>
            <TouchableOpacity onPress={closeEducationModal}>
              <Ionicons name="arrow-back" size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.workModalHeader}>Add Education</Text>
            <TouchableOpacity>
              <Text style={styles.workModalAddButton}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.workModalBody}>
            <TextInput
              placeholder="Institution"
              style={styles.workModalInput}
            />
            <TextInput
              placeholder="Graduation year"
              style={styles.workModalInput}
            />
          </View>
        </SafeAreaView>
      </Modal>
      <Modal
        animationType="fade"
        transparent={false}
        visible={genModalVisible}
        onRequestClose={closeGenderModal}>
        <SafeAreaView style={styles.workModalContainer}>
          <View style={styles.workModalHeaderContainer}>
            <TouchableOpacity onPress={closeGenderModal}>
              <Ionicons name="arrow-back" size={30} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.workModalHeader}>Update your gender</Text>
            <TouchableOpacity onPress={closeGenderModal}>
              <Text style={styles.workModalAddButton}>Save and close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.workModalBody}>
            <Text style={styles.fieldItemHeader}>
              Pick which best describes you
            </Text>
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => setSelectedGender('Woman')}>
              <Text style={styles.radioText}>Woman</Text>
              <Ionicons
                name={
                  selectedGender === 'Woman'
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => setSelectedGender('Man')}>
              <Text style={styles.radioText}>Man</Text>
              <Ionicons
                name={
                  selectedGender === 'Man'
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.radioContainer}
              onPress={() => setSelectedGender('Nonbinary')}>
              <Text style={styles.radioText}>Nonbinary</Text>
              <Ionicons
                name={
                  selectedGender === 'Nonbinary'
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                size={20}
              />
            </TouchableOpacity>
            <View style={styles.switchContainer}>
              <Text style={styles.switchText}>Shown on your profile</Text>
              <Switch
                value={isGenderVisible}
                onValueChange={setIsGenderVisible}
              />
            </View>
            {isGenderVisible && (
              <View style={styles.shownAsContainer}>
                <Text style={styles.shownAsText}>
                  Shown as: {selectedGender}
                </Text>
              </View>
            )}
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  screenHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  pageHeader: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  pageHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 24,
    borderWidth: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  imageOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldsContainer: {
    padding: 10,
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fieldItemcontainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
  },
  fieldItemHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
  interestsContainer: {
    marginTop: 20,
    width: 360,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'black',
    borderWidth: 0.3,
    paddingHorizontal: 20,
  },
  input: {
    fontSize: 16,
    marginTop: 20,
    width: 360,
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 0.3,
    paddingHorizontal: 20,
    textAlignVertical: 'top',
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    width: 360,
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableRowText: {
    flex: 2,
    color: 'black',
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  },
  rowEnd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  workModalContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  workModalHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  workModalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  workModalAddButton: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  workModalBody: {
    padding: 20,
  },
  workModalInput: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  radioText: {
    fontSize: 18,
    color: 'black',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
  switchText: {
    fontSize: 18,
    color: 'black',
  },
  shownAsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  shownAsText: {
    fontSize: 16,
    color: 'black',
  },
});
