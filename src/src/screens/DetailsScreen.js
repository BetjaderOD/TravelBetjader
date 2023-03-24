import {Button, ImageBackground, StyleSheet, Text, View} from 'react-native'
import React, { useEffect, useState, useRef} from 'react'
import Carousel from 'react-native-snap-carousel';

export default function DetailsScreen(props) {
    const {navigation} = props;
    const [data, setData] = useState()
    const carousel = useRef();
const [activeIndex, setActiveIndex] = useState(0)

    const getPlaces= async()=>{
      try {
        const response = await fetch('http://192.168.62.185:3000/travel/api/place',
        {
            method:"GET",
            headers:{"Content-Type": "application/json"},
        }
        )
       const json =  await response.json();
       setData(json)
       console.log('====================================');
       console.log(data);
       console.log('====================================');
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }
    useEffect(()=>{
        getPlaces();
    },[])
    const renderItem = ()=>{
        return(
            <View style={styles.card}>
                <Text>Hola</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
         <ImageBackground
         resizeMode='cover'
         style={styles.fondo}
         source={require('../../assets/img/lavine.png')}
         >
            <Carousel 
            layout='tinder'
            ref={carousel}
            sliderWidth={400}
            itemWidth={400}
            onSnapToItem={(index)=>setActiveIndex({activeIndex: index})}
            data={data}
            renderItem={renderItem}
            />
            
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    fondo:{
        flex:1,
        width:"100%",
        height:"100%",
        alignItems:'center',
        justifyContent:'center',
    },
    card:{
        backgroundColor:'white',
        borderRadius:10,
        height:"80%",
        marginTop:20,
        padding:10,
        marginHorizontal:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1.5,
        borderColor:'#333',

    }
})