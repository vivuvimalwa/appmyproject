
import { useState } from "react"
import {  StyleSheet, Text,View } from "react-native"

export default function index(){

const[name,setName]=useState([
{title:'welcome vivuvi',key:1},
{title:'welcome mr. benjamin',key:2},
{title:'welcome once again',key:3},
{}
])


 return(
  <View style={styles.container}>
    {name.map((name)=>{
      return(
<Text style={styles.text1} key={6}>{name.title}
</Text>
      )
    })}
    
    <View style={styles.container1}>
      <View style={styles.cont}><Text style={styles.text}>back</Text></View>
      <View style={styles.cont}><Text style={styles.text}>next</Text></View>
    </View>
  </View>
 )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  text1:{
    color:'white',
   
  },
  cont:{
    color:'white',
    backgroundColor:'yellow',
    borderRadius:40,
    width:60,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    zIndex:250,
    
   
  },
  text:{
    color:'black',
   
  },
  container1:{
 flex:1,
 position:'absolute',
 top:0,
 justifyContent:'space-between',
 flexDirection:'row',
 width:'100%',
  padding:30,
  backgroundColor:'green',
  height:'30%'
  

  }

})






/* App.js or MyFormComponent.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert,SafeAreaView, Image, KeyboardAvoidingView, Platform } from 'react-native';

const MyForm = () => {
  return (
    <KeyboardAvoidingView behavior='padding' 
    keyboardVerticalOffset={Platform.OS==="android"?100:0} style={styles.container}>
      
    <View style={styles.container2}>
      <Image source={require('../assets/images/adaptive-icon.png')} style={{width:200,height:200,alignSelf:'center',marginBottom:50}}/>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />  
      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Submit" />
    </View>
    </KeyboardAvoidingView>
  );
};



export default function Index() {
  return (
    <SafeAreaView style={styles.container1}>
      <MyForm />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    paddingHorizontal:15
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  container1: {
    flex: 1,
    backgroundColor:'#f5f5f5'
  },
  container2:{
    backgroundColor:'#ffff',
    padding:15,
    shadowColor:'#000',
    elevation:20
  }
});

*/