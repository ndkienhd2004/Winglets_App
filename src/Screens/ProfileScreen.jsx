import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const ProfileScreen = () => {
  const [status, setStatus] = useState('premium'); // State variable to manage 'premium' or 'boost'

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    const newStatus = index === 0 ? 'premium' : 'boost';
    setStatus(newStatus);
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.pageHeader}>Profile</Text>
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
            <Text
              style={[styles.profileText, {fontWeight: '120', fontSize: 36}]}>
              Julie, 29
            </Text>
          </View>
          <View>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onMomentumScrollEnd={handleScroll}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#FAB779', '#E73688']}
                style={[styles.linearGradient, {width: screenWidth - 20}]}>
                <Text style={styles.header}>Premium</Text>
                <Text style={styles.text}>
                  Unlock all of our features to be in complete control of your
                  experience
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Upgrade from 50,000 đ</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={['#42E695', '#3BB2B8']}
                style={[styles.linearGradient, {width: screenWidth - 20}]}>
                <Text style={styles.header}>Boost</Text>
                <Text style={styles.text}>
                  Boost your profile to get more visibility and matches
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Boost from 30,000 đ</Text>
                </TouchableOpacity>
              </LinearGradient>
            </ScrollView>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, {flex: 2}]}>
                What you get:
              </Text>
              <Text
                style={[
                  styles.tableHeaderText,
                  status === 'premium' && styles.boldText,
                ]}>
                Premium
              </Text>
              <Text
                style={[
                  styles.tableHeaderText,
                  status === 'boost' && styles.boldText,
                ]}>
                Boost
              </Text>
            </View>
            {[
              {feature: 'Unlimited likes', premium: true, boost: true},
              {feature: 'See who liked you', premium: true, boost: false},
              {feature: 'Advanced filters', premium: true, boost: false},
              {feature: 'Incognito mode', premium: true, boost: false},
              {feature: 'Travel mode', premium: true, boost: false},
              {feature: '5 SuperSwipes a week', premium: true, boost: true},
              {feature: '1 Spotlight a week', premium: true, boost: true},
              {feature: 'Unlimited Extends', premium: true, boost: true},
              {feature: 'Unlimited Rematch', premium: true, boost: true},
              {feature: 'Unlimited Backtrack', premium: true, boost: false},
              {feature: 'More likes in For You', premium: true, boost: false},
            ].map((item, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={[styles.tableRowText, {flex: 2}]}>
                  {item.feature}
                </Text>
                <View style={styles.checkContainer}>
                  <Icon
                    name="check"
                    size={20}
                    color={item.premium ? '#A3A7AB' : 'transparent'}
                    style={
                      status === 'premium' && item.premium && styles.boldIcon
                    }
                  />
                </View>
                <View style={styles.checkContainer}>
                  <Icon
                    name="check"
                    size={20}
                    color={item.boost ? '#A3A7AB' : 'transparent'}
                    style={status === 'boost' && item.boost && styles.boldIcon}
                  />
                </View>
              </View>
            ))}
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
  pageHeader: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
    textAlign: 'center',
  },
  profileText: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
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
  header: {
    fontWeight: '400',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 20,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 40,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  tableRowText: {
    flex: 2,
    color: 'black',
    textAlign: 'left',
  },
  checkContainer: {
    flex: 1,
    alignItems: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  boldIcon: {
    fontWeight: 'bold',
    color: 'black',
  },
});
