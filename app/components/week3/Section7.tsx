import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Room Type</Text>
            <View style={styles.profileSection}>
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/week3/room-8.jpg')}/>
                <View style={styles.profileText}>

                    <Text style={styles.name}>Standard Twin Room</Text>
                    <Text style={[styles.name, { color: 'red' }]}>$399.99</Text>
                    <Text style={[styles.subInfo,{ color: 'blue' }]}>Hurry Up! This is your last room!</Text>

                </View>
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
        width: 80,
        height: 90,
        borderRadius: 10,
    },
    profileText: {
        paddingLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 5,
    },
    subInfo: {
        color: 'gray',
        marginTop: 2,
    },
    roomType: {
        fontSize: 16,
        color: '#555',
        marginBottom: 4,
    },


});