import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import WingletsIcon from '../WingletsIcon';
const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const renderIcon = (routeName, isFocused) => {
          let iconName;
          switch (routeName) {
            case 'Winglets':
              return (
                <WingletsIcon
                  width={60}
                  height={24}
                  fill={isFocused ? '#E73688' : '#000'}
                />
              );
            case 'Chats':
              iconName = 'wechat';
              break;
            case 'Profile':
              iconName = 'user';
              break;
            case 'Liked You':
              iconName = 'heart';
              break;
            default:
              iconName = 'circle';
              break;
          }

          return (
            <Icon
              name={iconName}
              size={24}
              color={isFocused ? '#E73688' : '#000'}
            />
          );
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityHint={options.tabBarAccessibilityHint}
            onPress={onPress}
            style={styles.tabButton}>
            {renderIcon(route.name, isFocused)}
            <Text
              style={[
                styles.tabLabel,
                {color: isFocused ? '#E73688' : '#000'},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CustomTabBar;
