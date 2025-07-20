import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const commentsData = [
    {
        name: 'Steve Garrett',
        time: '5 hours ago',
        views: '100k views',
        title: 'Overseas Adventure Travel In Nepal',
        description: 'Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo',
        image: require('../../assets/week3/profile-2.jpg'),
    },
    {
        name: 'Maria Lopez',
        time: '3 hours ago',
        views: '85k views',
        title: 'Exploring Thai Temples',
        description: 'A spiritual and architectural journey through some of Thailand’s most iconic temples.',
        image: require('../../assets/week3/profile-2.jpg'),
    },
    {
        name: 'John Smith',
        time: '1 day ago',
        views: '200k views',
        title: 'Mountain Hiking in Chiang Mai',
        description: 'Join me as I hike up the misty trails of Doi Suthep to discover nature and culture.',
        image: require('../../assets/week3/profile-2.jpg'),
    },
];

export default function Comment() {
    return (
        <View>
            {commentsData.map((item, index) => (
                <View key={index} style={styles.container}>
                    {/* ก้อนโปรไฟล์ */}
                    <View style={styles.profileSection}>
                        <Image style={styles.profileImage} source={item.image} />
                        <View style={styles.profileText}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.subInfo}>{item.time} | {item.views}</Text>
                        </View>
                    </View>

                    {/* เนื้อหา */}
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 20 }}>{item.title}</Text>
                        <Text style={{ color: '#444444' }}>{item.description}</Text>
                    </View>
                </View>
            ))}
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