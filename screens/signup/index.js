
import React, { useState } from 'react';


import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';




const SignUp = () => {
  const [fName, setfName] = useState('')
  const [phnum, setphnum] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const navigation = useNavigation()

  const submit = () => {
    console.log(fName, 'fName')
    console.log(phnum, 'phnum')
    console.log(email, 'email')
    console.log(password, 'password')
    navigation.navigate('signin')


  }


  return (

    <View style={{ flex: 1, borderWidth: 1, backgroundColor: 'white' }}>

      <View style={{ padding: 20 }}>
        <Text style={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: 27, color: '#dc143c' }}>
          {'Create An Account'}
        </Text>
      </View>

      <ScrollView>
        <KeyboardAvoidingView behavior={'padding'}>

          <View style={{ alignItems: 'center' }}>
            <View style={{ borderWidth: 2, borderColor: '#d3d3d3', borderRadius: 30, width: 300, marginTop: 20, paddingLeft: 20 }}>
              <TextInput
                keyboardType={'default'}
                placeholder={'Full Name'}
                onChangeText={(value) => setfName(value)}
              />
            </View>

            <View style={{ borderWidth: 2, borderColor: '#d3d3d3', borderRadius: 30, width: 300, marginTop: 20, paddingLeft: 20 }}>
              <TextInput
                keyboardType={'default'}
                placeholder={'Phone Number'}
                onChangeText={(value) => setphnum(value)}

              />
            </View>

            <View style={{ borderWidth: 2, borderColor: '#d3d3d3', borderRadius: 30, width: 300, marginTop: 20, paddingLeft: 20 }}>
              <TextInput
                keyboardType={'default'}
                placeholder={'E-mail Address'}
                onChangeText={(value) => setemail(value)}

              />
            </View>

            <View style={{ borderWidth: 2, borderColor: '#d3d3d3', borderRadius: 30, width: 300, marginTop: 20, paddingLeft: 20 }}>
              <TextInput
                keyboardType={'default'}
                secureTextEntry
                placeholder={'Password'}
                onChangeText={(value) => setpassword(value)}

              />
            </View>

            <TouchableOpacity onPress={() => submit()}>
              <View style={{
                borderRadius: 30, width: 250, marginTop: 30, padding: 13, alignItems: 'center',
                backgroundColor: '#dc143c'
              }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
                  {'Sign Up'}
                </Text>
              </View>
            </TouchableOpacity>




          </View>
        </KeyboardAvoidingView>
      </ScrollView>

    </View>


  );
};




export default SignUp;
