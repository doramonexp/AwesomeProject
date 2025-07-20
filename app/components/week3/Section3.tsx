import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Section3() {
    return (
        <View style={styles.container}>
            {/* ก้อนโปรไฟล์ */}
            <View style={styles.profileSection}>
                <View style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: "white" }}>9.5</Text>
                </View>

                <View style={styles.profileText}>
                    <Text style={[{fontSize: 20, color: '#F44336' }]}>Excellent</Text>
                    <Text style={styles.subInfo}>See 801 reviews</Text>
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