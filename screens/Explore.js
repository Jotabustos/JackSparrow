import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput,Platform,StatusBar, ScrollView, Dimensions, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category'

import Home from './components/Explore/Home';

const {height,width} = Dimensions.get('window');

class Explore extends React.Component {

  componentWillMount() {
    this.startHeaderHeight = 20
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  };

  render() {
    return <SafeAreaView style={{ flex: 1, backgroundColor: "#0072ce" }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: this.startHeaderHeight }} />

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, paddingTop: 20 }}>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Image style={{ flex: 1, resizeMode: "contain", height: 40 }} source={require("../assets/logotkt.png")} />
              </View>
              {/* <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <Category imageUri={require("../assets/home.jpg")} name="Home" />
                  <Category imageUri={require("../assets/experiences.jpg")} name="Experiences" />
                  <Category imageUri={require("../assets/restaurant.jpg")} name="Restaurant" />
                </ScrollView>
              </View> */}

              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    color: "white"
                  }}
                >
                  Escape Room On Tour
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "100",
                    color: "white"
                  }}
                >
                  ¡Nuestro #EscapeRoomAR sigue en tour! Esta vez lo han
                  estado probando en las oficinas de @loreal_es.
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 5, borderWidth: 1, borderColor: "#dddddd" }} source={require("../assets/ecr.png")} />
                </View>
              </View>
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    color: "white"
                  }}
                >
                  Digital Skills Awards
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "100",
                    color: "white"
                  }}
                >
                  ¡Ya estamos en la entrega de los premios Digital Skills
                  Awards de @AMETIC_es!
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image style={{ flex: 1, width: null, height: null, resizeMode: "cover", borderRadius: 5, borderWidth: 1, borderColor: "#dddddd" }} source={require("../assets/mp.png")} />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20, color: "white" }}>
                The Key Talent Around The World
              </Text>
            <View style={{ marginTop: 20, marginBottom: 40, paddingHorizontal: 20, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
              <Home width={width} imageUri={require("../assets/costa.png")} name="Costa Rica" />
              <Home width={width} imageUri={require("../assets/chile.png")} name="Chile" />

              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>;
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0072ce',
    alignItems: 'center',
    justifyContent: 'center',
    color:'white'
  },

});
