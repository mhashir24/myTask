
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList

} from 'react-native';

import { useNavigation } from '@react-navigation/native';


import dpimg from "../../assets/Samantha.jpg";
import adficon from "../../assets/adficon.png";
import Aimg from "../../assets/alicia.jpg";
import Bimg from "../../assets/dani.jpg";
import Cimg from "../../assets/jennapage.jpeg";
import Dimg from "../../assets/jenny.jpg";
import Eimg from "../../assets/julia.jpg";
import Fimg from "../../assets/steve.jpeg";
import riconimg from "../../assets/icon2.png";
import giconimg from "../../assets/icon3.png";







const mycontactlist = [
  {
    id:'0',
    name: 'Alicia',
    img: Aimg,
    iimg: riconimg,
    ntext: '-182',
    backgroundColor: 'blue'
  },
  {
    id:'1',
    name: 'Jenny Jenny Jenny Jenny',
    img: Bimg,
    iimg: giconimg,
    ntext: '+388',
    backgroundColor: 'pink'


  },
  {
    id:'2',
    name: 'Yennifer',
    img: Cimg,
    iimg: giconimg,
    ntext: '+988',
    backgroundColor: 'yellow'

  },
  {
    id:'3',
    name: 'Freya',
    img: Dimg,
    iimg: riconimg,
    ntext: '-109',
    backgroundColor: 'green'
  },
  {
    id:'4',
    name: 'Jane',
    img: Eimg,
    iimg: riconimg,
    ntext: '-478',
    backgroundColor: 'yellow'
  },
  {
    id:'5',
    name: 'Steve',
    img: Fimg,
    iimg: giconimg,
    ntext: '+388',
    backgroundColor: 'yellow'
  }
]



const Myprofile = () => {
    const navigation = useNavigation()

    const submit = () =>{
      navigation.navigate('MainScreen')
    }
  return (

    <View style={{flex:1, borderWidth:1, backgroundColor:'#dcdcdc'}}>
      <View style={{backgroundColor:'white', paddingVertical:25, margin:10, flexDirection:'row'}}>
        <View style={{marginLeft:10}}>
          <Image style={{width:110, height:110, borderRadius:60}}
          source = {dpimg}
          />
        </View>

        <View style={{justifyContent:'center', marginLeft:30}}> 
          <Text style={{fontSize:26, fontFamily:'serif', fontWeight:'bold', color:'#800080'}}>
            {'Jessica Allen'}
          </Text>
        </View>

      </View>

      <View style={{backgroundColor:'white', paddingVertical:25, paddingHorizontal:10 , margin:10, flexDirection:'row',marginTop:-10, 
      borderTopWidth:0.5, borderColor:'#a9a9a9'}}>
      <TouchableOpacity onPress = { () => submit ()}>
          <View style={{width: 120, borderRadius: 3, backgroundColor: '#d3d3d3', padding: 8, marginLeft:15}}>
            <Text style={{textAlign: 'center', color: '#708090', fontWeight:'bold'}}> 
              {'View Profile'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{width: 120, borderRadius: 3, backgroundColor: '#008080', padding: 8, marginLeft:50}}>
            <Text style={{textAlign: 'center', color: 'white', fontWeight:'bold'}}>
              {'Add User'}
            </Text>
          </View>
        </TouchableOpacity>

      </View>

      <FlatList

      data = {mycontactlist}
      renderItem = {({item}) =>{
        return(
          <View style={{backgroundColor:'white', paddingVertical:10, paddingHorizontal:10 , margin:10, flexDirection:'row'
          , marginTop:-5, borderRadius:5}}>

          <View>
            <Image style={{width:50, height:50, borderRadius:40}}
            source = {item.img}
            />
          </View>
          
            <View style={{justifyContent:'center', flex: 1}}>
                <Text numberOfLines={1} style={{textAlign: 'center', color: '#708090', fontWeight:'bold'}}> 
                  {item.name}
                </Text>
            </View>
    
            <View style={{ width: 90, height: 40 , backgroundColor: item.backgroundColor, justifyContent:'center', alignItems:'center', flexDirection:'row',
                          marginLeft:30, marginTop:7, borderRadius:7}}>
    
              <View>
                <Image style={{width:15, height:15}}
                source = {item.iimg}
                />
              </View>
    
              <View>
              <Text style={{color:'red', marginLeft:10, fontWeight:'bold'}}>
                {item.ntext}
              </Text>
              </View>
            </View>
    
            <View style={{height:40 ,backgroundColor: '#d3d3d3', justifyContent:'center', alignItems:'center', flexDirection:'row',
                          marginLeft:10, marginTop:7, borderRadius:7, paddingHorizontal:7}}>
               <TouchableOpacity>               
              <View >
                <Image style={{width:28, height:17}}
                source = {adficon}
                />
              </View>
              </TouchableOpacity>
    
    
            </View>
            </View>
        )
      }}
      
      />


    

    </View>

    

  );
};




export default Myprofile;
