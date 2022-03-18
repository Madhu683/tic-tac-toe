import React from 'react';
import { Text,TouchableOpacity,StyleSheet } from 'react-native';

export default function Sqaure({value,onPress}){
    return(
        <TouchableOpacity style={styles.Sqaure}onPress={onPress}>
        <Text style={styles.value}>{value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        Sqaure:{
           backgroundColor:'black',
           borderWidth:2,
           borderColor:'white',
           justifyContent:'center',
           alignItems:'center',
           width:'33.33%',
           height:'100%'
        },
        value:{
            fontSize:40,
           fontWeight:'800',
           color:'red',
        }
    }
)