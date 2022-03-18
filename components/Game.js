import React ,{useState}from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Board from './Board';
import { calculateWinner } from '../helper';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Game()
{   const [board,setBoard] = useState(Array(9).fill(null));
    const [xIsNext,setXisNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick=i=>
    {
       const boardCopy = [...board];
       //if user click on occupied square or game is won , return 
       if(winner || boardCopy[i]) return;
       //put an X or 0 in the clicked square
       boardCopy[i] = xIsNext ? 'X':'O';
       setBoard(boardCopy);
       setXisNext(!xIsNext);
    }
    const reset=()=>
    {
        setBoard(Array(9).fill(null));
    }
    const renderMove=()=>
    {

    }
    return(
        <View style={{width:'100%',height:'100%',backgroundColor:'black',alignItems:'center'}}> 
        <Text style={{color:'white',margin:50,fontSize:30}}>Tic Toc Toe</Text>
        <View style={{width:'90%',height:'6%',margin:30,flexDirection:'row',borderRadius:5,backgroundColor:'black'}}>
           {!xIsNext
           ?<><View style={{ width: '50%', height: '100%', backgroundColor: 'black',borderRadius:5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, color: 'white' }}>X</Text>
                    </View><View style={{ width: '50%', height: '100%', backgroundColor: 'white',borderRadius:5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 30, color: 'black' }}>O</Text>
                        </View></>
            :<><View style={{ width: '50%', height: '100%', backgroundColor: 'white',borderRadius:5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30, color: 'black' }}>X</Text>
        </View><View style={{ width: '50%', height: '100%', backgroundColor: 'black',borderRadius:5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, color: 'white' }}>O</Text>
            </View></>}
            
        </View>
        <Board  squares={board} onPress={handleClick} />
        <TouchableOpacity style={{width:50,height:50,borderColor:'white',borderWidth:2,borderRadius:50,justifyContent:'center',alignItems:'center',margin:10,alignSelf:'flex-end'}} 
           onPress={reset}>
            <Entypo name='cw' style={{color:'white',fontSize:25}}/>
        </TouchableOpacity>
        <View style={{width:'50%',height:'30%',alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white',fontSize:20}}>WINNER</Text>
            <View style={{width:'100%',height:'20%',borderColor:'white',borderRadius:5,borderWidth:2,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,fontWeight:'boldex',color:'gold'}}>{winner}</Text>
            </View>
        </View>
        </View>
    )
}