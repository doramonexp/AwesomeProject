import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section4() {
    return (
        <View style={styles.container}>
         

            {/* <Text>...</Text> */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Hotel Description</Text>
                <Text style={{ color: '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>




        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        margin: 10,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileText: {
        paddingLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subInfo: {
        color: 'gray',
        marginTop: 2,
    },
});