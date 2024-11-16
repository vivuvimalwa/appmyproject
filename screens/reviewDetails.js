import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function ReviewDetails() {
    const route = useRoute();
    const { title } = route.params || { title: 'No Title' }; // Provide a default value to handle the undefined case
    const { body } = route.params || {title:''};
    const {key}=route.params || {key:''}
    const {image}=route.params || {image:'no image'}
    return (
        <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:20,fontWeight:'condensedBold'}}>{title}</Text>
            <Text style={{fontSize:18}}>Key:{key}</Text>
            <Text style={{padding:25,margin:15,borderTopWidth:4,borderColor:'grey',fontSize:16}}>{body}</Text>
            <View>
                <Text>Gamezone rating:</Text>
                <Image source={image} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 26,
    },
   
    
});
