import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import StarRating from 'react-native-star-rating';


class Home extends React.Component {
  render() {
    return (
      <View style={{width:this.props.width/2 -30,height:this.props.width/2 -30, borderWidth:0.5,borderColor: '#dddddd',}}>
                      <View style={{flex:1}}>
                      <Image style={{flex:1,width:null,height:null,resizeMode:'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd'}} source={this.props.imageUri} />
                      </View>
                      <View style={{flex:1, alignItems: 'center',justifyContent:'space-evenly',paddingLeft: 10,}}>
    
                      <Text style={{fontSize: 18, fontWeight: 'bold',color:'white'}}>{this.props.name}</Text>
                    
                      
                      </View>
       </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
