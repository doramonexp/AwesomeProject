import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Section8() {
    return (
        <View style={styles.container}>
            <Text style={styles.hotelName}>price</Text>

            <View style={styles.ratingWrapper}>
                <Text style={[styles.name, { color: 'red' }]}>$399.99</Text>

                <TouchableOpacity
                    style={styles.bookNowButton}
                    onPress={() => Alert.alert('ยืนยันการจอง')}                >
                    <Text style={styles.bookNowText}>Book Now</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.price}>AVG/Night</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 16,
        margin: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    hotelName: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#333',
    },
    ratingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    bookNowButton: {
        backgroundColor: 'red',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    bookNowText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: 'black',
        marginTop: 3,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});