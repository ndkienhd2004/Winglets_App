import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.header}>Profile</Text>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <View style={styles.profileImage}>
              <Image
                source={{
                  uri: 'https://raw.githubusercontent.com/DesignIntoCode/ReactProfile02/master/assets/profile-pic.jpg',
                }}
                style={styles.image}
                resizeMode="center"></Image>
            </View>
            <View style={styles.changeInfo}>
              <Icon
                name="pencil"
                size={30}
                color="#7e8691"
                style={{marginTop: 1, marginLeft: 1}}></Icon>
            </View>
          </TouchableOpacity>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, {fontWeight: '120', fontSize: 36}]}>
              Julie, 29
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 24,
    borderWidth: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  changeInfo: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 20,
    bottom: 0,
    right: 0,
    width: 48,
    height: 48,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
});
