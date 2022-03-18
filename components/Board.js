import React from 'react';
import { View ,StyleSheet} from 'react-native';
import Sqaure from './Square';


export default function Board({squares,onPress})
{
    return(
        <View  style={styles.Board}>
              <View style={{flexDirection:'row',height:'33.33%'}}>
              <Sqaure value={squares[0]} onPress={()=>onPress(0)}/>
              <Sqaure value={squares[1]} onPress={()=>onPress(1)}/>
              <Sqaure value={squares[2]} onPress={()=>onPress(2)}/>
             </View>
             <View style={{flexDirection:'row',height:'33.33%'}}>
              <Sqaure value={squares[3]} onPress={()=>onPress(3)}/>
              <Sqaure value={squares[4]} onPress={()=>onPress(4)}/>
              <Sqaure value={squares[5]} onPress={()=>onPress(5)}/>
             </View>
             <View style={{flexDirection:'row',height:'33.33%'}}>
              <Sqaure value={squares[6]} onPress={()=>onPress(6)}/>
              <Sqaure value={squares[7]} onPress={()=>onPress(7)}/>
              <Sqaure value={squares[8]} onPress={()=>onPress(8)}/>
              </View>

        </View>
    )
}

const styles = StyleSheet.create(
    {
        Board:{
                   borderWidth:4,
                   borderColor:'white',
                   borderRadius:10,
                   width:250,
                   height:250,
                   alignSelf:'center'
                   
                   
        }
    }
)