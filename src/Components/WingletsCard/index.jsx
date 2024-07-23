import React from 'react';
import PropTypes from 'prop-types';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Card = ({user}) => {
  const {name, image, bio} = user;

  return (
    <View style={styles.card}>
      <ImageBackground
        source={{uri: image}}
        style={styles.image}
        imageStyle={styles.imageStyle}
        resizeMode="cover">
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#FAB779', '#E73688']}
          style={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    height: screenHeight * 0.7,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: 10,
  },
  cardInner: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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
});

export default Card;
