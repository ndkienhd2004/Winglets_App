import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from '../Components/WingletsCard';
import users from '../../assets/data/user';
import GradientText from '../Components/TextColor';
import AnimatedStack from '../Components/AnimatedStack';

const HomeScreen = () => {
  const onSwipeLeft = user => {
    console.log('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.log('swipe right: ', user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <GradientText text="Winglets" style={styles.gradientText} />
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Card user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    margin: 0,
  },
  gradientText: {
    fontSize: 36,
    margin: 0,
  },
});

export default HomeScreen;
