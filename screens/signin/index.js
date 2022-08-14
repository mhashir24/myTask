
import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput

} from 'react-native';
import { useNavigation } from '@react-navigation/native';



const Signin = () => {

  const [Email,setEmail] = useState('')
  const [Password,setPassword] = useState('')
  const navigation = useNavigation()

  const submit = () => {
    console.log (Email, 'Email')
    console.log (Password, 'Password')
    navigation.navigate('myprofile')
  }
  return (

    <View style={{flex:1, borderWidth:1, backgroundColor:'white'}}>
      
      <View style={{padding:20}}>
      <Text style={{fontFamily:'serif', fontWeight:'bold', fontSize:27, color:'#dc143c'}}>
          {'Sign In'}
        </Text>
      </View>

      <View style={{alignItems:'center'}}>
      <View style={{borderWidth:2, borderColor:'#d3d3d3', borderRadius:30, width:300, marginTop:20, paddingLeft:20}}>
        <TextInput
          keyboardType = {'default'}
          placeholder = {'E-mail or phone number'}
          onChangeText = {(value) => setEmail()}
        />
      </View>

      <View style={{borderWidth:2, borderColor:'#d3d3d3', borderRadius:30, width:300, marginTop:20, paddingLeft:20}}>
        <TextInput
          keyboardType = {'default'}
          secureTextEntry
          placeholder = {'Password'}
          onChangeText = {(value) => setPassword()}

        />
      </View>

      <TouchableOpacity onPress = {() => submit()}>
      <View style={{borderRadius:30, width:250, marginTop:20, padding:10, alignItems:'center',
                    backgroundColor:'#dc143c'}}>
        <Text style={{color:'white', fontWeight:'bold'}}>
          {'Log In'}
        </Text>
      </View>
      </TouchableOpacity>

      <View style={{marginTop:25, marginBottom:5}}>
      <Text style={{color:'black', fontWeight:'bold'}}>
          {'OR'}
        </Text>
      </View>

      <TouchableOpacity>
      <View style={{borderRadius:30, width:250, marginTop:20, padding:10, alignItems:'center',
                    backgroundColor:'#4267B2'}}>
        <Text style={{color:'white', fontWeight:'bold'}}>
          {'Login With Facebook'}
        </Text>
      </View>
      </TouchableOpacity>
      </View>


    </View>


  );
};




export default Signin;
