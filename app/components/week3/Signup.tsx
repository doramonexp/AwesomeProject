import React, { useState } from 'react';
import {
  Alert, Keyboard, KeyboardAvoidingView, Platform, ScrollView,
  StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback
} from 'react-native';

export default function Signup() {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSignup = () => {
    if (!id || !email || !address) {
      Alert.alert('Error', 'Please fill in all fields');
    } else {
      Alert.alert('Success', `Signed up with ID: ${id}, Email: ${email}`);
      // ตรงนี้คุณสามารถผูก backend ที่ใช้ PHP/MySQL ได้เลย
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Sign up Form</Text>

          <TextInput
            style={styles.input}
            placeholder="Input ID"
            value={id}
            onChangeText={setId}
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Input Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Input Address"
            value={address}
            onChangeText={setAddress}
            placeholderTextColor="#888"
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5DC',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    fontSize: 18,
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: '#FF9800',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});