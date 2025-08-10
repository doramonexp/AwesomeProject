import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function TodoItem(props: any) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkBox} onPress={() => props.onCheck(props.item.id)}>
                <FontAwesome
                    name={props.item.completed ? 'check-square' : 'square-o'}
                    size={24}
                    color={props.item.completed ? '#4CAF50' : '#999'}
                />
            </TouchableOpacity>

            <View style={styles.inputContainer}>
                <TextInput
                    value={props.item.title}
                    placeholder="What's on your mind?"
                    onChangeText={(new_title) => props.onUpdate(new_title, props.item.id)}
                    style={styles.textInput}
                    placeholderTextColor="#aaa"
                />
            </View>

            <TouchableOpacity style={styles.deleteButton} onPress={() => props.onDelete(props.item.id)}>
                <FontAwesome name="trash" size={22} color="#E53935" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    checkBox: {
        flex: 1,
        alignItems: 'center',
    },
    inputContainer: {
        flex: 10,
        paddingHorizontal: 10,
    },
    textInput: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 4,
    },
    deleteButton: {
        flex: 1,
        alignItems: 'center',
    },
});