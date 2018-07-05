import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput,Platform,StatusBar, ScrollView, Dimensions, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Category from './components/Explore/Category'

import Home from './components/Explore/Home';

const {height,width} = Dimensions.get('window');

class Explore extends React.Component {

  componentWillMount() {
    this.startHeaderHeight = 80
    if(Platform.OS == 'android'){
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  };

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <View style={{height:this.startHeaderHeight, backgroundColor:'white',borderBottomWidth: 1, borderBottomColor: '#dddddd',}}>
            <View style={{ flexDirection: 'row',padding: 10,backgroundColor:'white',marginHorizontal: 20,shadowOffset:{width:0,height:0},shadowColor: 'black',shadowOpacity: 0.2,elevation:1 ,marginTop: Platform.OS =='android' ? 30 : 20,}}>
              <Icon name="ios-search" size={20} style={{marginRight: 10,}} />
              <TextInput placeholder="Try New Delhi" placeholderTextColor="grey" style={{flex:1,fontWeight: '700',backgroundColor:'white'}} underlineColorAndroid="transparent"/>
            </View>
              <Animated.View style={{flexDirection: 'row',marginHorizontal: 20, position:'relative',top:10}}>
                <View style={{ minHeight: 20, minWidth: 40,padding: 5, backgroundColor:'white',borderColor: '#dddddd',borderWidth: 1,borderRadius: 2,}}>
                  <Text style={{fontWeight: '700',fontSize: 10,}}>
                    Guest
                  </Text>
                </View>
                <View style={{ minHeight: 20, minWidth: 40,padding: 5, backgroundColor:'white',borderColor: '#dddddd',borderWidth: 1,borderRadius: 2,}}>
                  <Text style={{fontWeight: '700',fontSize: 10,}}>
                    Dates
                  </Text>
                </View>
              </Animated.View>

          </View>

        <ScrollView scrollEventThrottle={16}>
            <View style={{flex:1, backgroundColor:'white',paddingTop: 20,}}>
              <Text style={{ fontSize: 24,fontWeight: '700',paddingHorizontal: 20,}}>
                What can we help you find, Varun?
              </Text>
              <View style={{height:130, marginTop: 20,}}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Category imageUri={require('../assets/home.jpg')} name='Home' />
                    <Category imageUri={require('../assets/experiences.jpg')} name='Experiences' />
                    <Category imageUri={require('../assets/restaurant.jpg')} name='Restaurant' />
                  </ScrollView>
              </View>

              <View style={{marginTop: 40, paddingHorizontal: 20,}}>
                <Text style={{fontSize: 24,fontWeight: '700',}}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={{marginTop: 10,fontWeight: '100',}}>
                  A new selection of homes verified for quality & confort
                </Text>
                <View style={{width: width-40, height:200,marginTop: 20,}}>
                  <Image style={{flex:1,width:null,height:null,resizeMode:'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}} source={require('../assets/home.jpg')} />
                </View>
              </View>

            </View>
             <View style={{marginTop: 40,}}>
                  <Text style={{fontSize: 24,fontWeight: '700',paddingHorizontal: 20,}}>
                  Homes around the world
                  </Text>
                  <View style={{marginTop: 20, paddingHorizontal: 20, flexDirection: 'row',flexWrap: 'wrap',justifyContent:'space-between'}}>
                    <Home width={width} name="The Cozy Place" type="PRIVATE ROOM - 2 BEDS" price={82} rating={4}/>
                    <Home width={width}  name="The Palace" type="PRIVATE ROOM - 3 BEDS" price={142} rating={2}/>
                    <Home width={width}  name="Illescas" type="SHARED ROOM - 4 BEDS" price={89} rating={5}/>
                  </View>
             </View>
        </ScrollView>

        </View>
       
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
