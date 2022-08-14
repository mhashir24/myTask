
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity, 
  Image

} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import img from "../../assets/logo.png";


const MainScreen = () => {
  const navigation = useNavigation()

  const submit = () =>{
    navigation.navigate('signup')

  }
  return (

    <View style={{flex:1, backgroundColor: 'white', borderWidth:1, justifyContent:'center', alignItems:'center'}}>
      
      <View style={{marginTop:-50, marginBottom:20}}>
        <Image style={{width:120, height:120}}
          source = {img}
        />
      </View>



      <View style={{padding:10, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontFamily:'serif', fontWeight:'bold', fontSize:27, color:'#dc143c'}}>
          {'Say hello to your new'}
        </Text>
        <Text style={{fontFamily:'serif', fontWeight:'bold', fontSize:27, color:'#dc143c'}}>
          {'app'}
        </Text>

      </View>

    <TouchableOpacity>
    <View style={{width:280, padding:12, borderRadius:30, alignItems:'center', marginTop:25, 
    backgroundColor:'#dc143c'}}>
      <Text style={{color:'white', fontWeight:'bold', fontSize:16}}>
        {'Log In'}
      </Text>
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={ () => submit()}>
    <View style={{borderWidth:2, borderColor:'#dc143c', width:280, padding:10, borderRadius:30, alignItems:'center', margin:10}}>
    <Text style={{color:'#dc143c', fontWeight:'bold', fontSize:16}}>
        {'Sign Up'}
      </Text>
    </View>
    </TouchableOpacity>

    </View>

  );
};




export default MainScreen;
