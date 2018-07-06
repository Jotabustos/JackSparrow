import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
const { height, width } = Dimensions.get('window');

class Profile extends React.Component {
  render() {
    return <SafeAreaView style={{ flex: 1, backgroundColor: "#0072ce" }}>
        <View style={[styles.container]}>
        {/* <ScrollView scrollEventThrottle={16}> */}
          <View style={[styles.card, { alignItems: "stretch" }]}>
            <View style={{ margin: 10, shadowRadius: 10, shadowColor: "#175E4C", shadowOffset: { width: 2, height: 6 }, shadowOpacity: 0.7, backgroundColor: "#e0004d", padding: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "grey" }} />
                <View style={{ marginLeft: 20, paddingTop: 10, alignItems: "flex-start" }}>
                  <Text style={styles.text}>Felix Ruiz</Text>
                  <Text style={styles.text}>Lead Designer</Text>
                </View>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ color: "white" }}>
                  <Icon name="ios-call-outline" size={16} /> 481-5162342
                </Text>
                <Text style={{ color: "white" }}>
                  <Icon name="ios-send-outline" size={16} /> felix.ruiz@thekeytalent.com
                </Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <View style={{ width: width - 40, flexDirection: "column" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginBottom: 10
                }}
              >
                Sobre mi
              </Text>
              <Text style={{ color: "white" }}>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum."
              </Text>
            </View>
          </View>
          {/* </ScrollView> */}
        </View>
      </SafeAreaView>;
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0072ce",
    alignItems: "center",
    paddingTop: 80
  },
  card: {
    flex: 1,
    backgroundColor: "#0072ce",
    alignItems: "center",
    width:width-20
  },
  textProfile: {
    fontSize: 16
  },
  text: {
    color: "white"
  }
});
