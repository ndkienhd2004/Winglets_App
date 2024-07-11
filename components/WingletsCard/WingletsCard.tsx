import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Card = () => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w51Wlng4aVnfp_1EYs0ky0UcmWTNODNssw&s',
        }}
        style={styles.ImageStyle}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#FAB779', '#E73688']}
          style={styles.cardInner}>
          <Text style={styles.name}>hihihahah</Text>
          <Text style={styles.bio}>A handsome boy</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: '80%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  ImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
  },
  cardInner: {
    padding: 10,
  },
});
