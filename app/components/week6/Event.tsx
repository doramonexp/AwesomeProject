import React, { useEffect, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function Event(props:any) {

    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();           
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Upcoming Events</Text>
            <Text style={{ color: 'gray', marginVertical: 5 }}>What's the Worst that could Happend</Text>
            <FlatList
                horizontal={true}             
                data={onlineTours}
                renderItem={
                    ({ item, index }:any) => {                      
                        return (
                            <View style={{ marginRight: 10 }} >
                                <Image style={ styles.picture } source={{ uri: item.uri }} />
                                <View style={{ width: Dimensions.get("screen").width / 1.6,flexDirection : "row", backgroundColor : 'white', borderWidth : 1 , borderColor : "grey" , borderBottomLeftRadius : 10 , borderBottomRightRadius : 10}}>
                                    <View style={{ padding : 10  }} >
                                        <Text style={{ fontSize: 15, color: 'red', textAlign : "center" }}>{item.month}</Text>
                                        <Text style={{ fontSize: 15, color: 'gray',  textAlign : "center" }}>{item.date}</Text>
                                    </View>
                                    <View style={{ padding : 10  }} >
                                        <Text style={{ fontSize: 15, color: 'black' }}>{item.title}</Text>
                                        <Text style={{ color: 'gray' }}>{item.datetime}</Text>
                                        <Text style={{ color: 'gray' }}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>
                           
                        );
                    }
                }

            />
        </View>
    );
}



const styles = StyleSheet.create({
  
    picture: {
        width: Dimensions.get("screen").width / 1.6, 
        height: 150, 
        borderTopLeftRadius : 10, 
        borderTopRightRadius : 10 
    },     
});