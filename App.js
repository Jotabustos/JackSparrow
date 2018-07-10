import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';





export default createBottomTabNavigator(
  {
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/logosm.png")}
            style={{ width: 24, height: 24, tintColor: "#0072ce" }}
          />
        )
      }
    },
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" color={"#0072ce"} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person-outline" color={"#0072ce"} size={24} />
        )
      }
    },
   
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "SAVED",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart-outline" color={"#0072ce"} size={24} />
        )
      }
    },

    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "INBOX",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes-outline" color={"#0072ce"} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#0072ce",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: {
          width: 5,
          height: 3
        },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
