import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Card() {
    return (
        <View style={styles.container}>
            {/* ก้อนโปรไฟล์ */}
            <View style={styles.profileSection}>
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/week3/profile-2.jpg')} // ✅ แก้ path ตามที่คุณวางไว้
                />
                <View style={styles.profileText}>
                    <Text style={styles.name}>Steve Garrett</Text>
                    <Text style={styles.subInfo}>5 hours ago | 100k views</Text>
                </View>
            </View>

            {/* ก้อนเนื้อหาอื่น ๆ ถ้ามี */}
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }} source={require("../../assets/week3/trip-2.jpg")} />
            </View>

            {/* <Text>...</Text> */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20 }}>Overseas Adventure Travel In Nepal</Text>
                <Text style={{ color: '#444444' }}>Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo</Text>
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