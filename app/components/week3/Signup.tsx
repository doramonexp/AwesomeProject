import React from 'react';
import { Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Signup() {
  const handlePress = () => {
    Alert.alert('Sign up button');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ padding: 20, backgroundColor: '#F5F5DC', flex: 1, }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 10 }}>
          Sign up Form
        </Text>

        <TextInput
          style={{
            fontSize: 18,
            marginTop: 10,
            backgroundColor: '#FFF',
            borderColor: '#888',
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
          }}
          placeholder="Input ID"
          placeholderTextColor="#999"
        />
        <TextInput
          style={{
            fontSize: 18,
            marginTop: 10,
            backgroundColor: '#FFF',
            borderColor: '#888',
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
          }}
          placeholder="Input Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={{
            fontSize: 18,
            marginTop: 10,
            marginBottom: 20,
            backgroundColor: '#FFF',
            borderColor: '#888',
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
          }}
          placeholder="Input Address"
          placeholderTextColor="#999"
        />

        <TouchableOpacity
          onPress={handlePress}
          style={{
            backgroundColor: '#FFA500',
            paddingVertical: 12,
            borderRadius: 8,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#FFF', fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}