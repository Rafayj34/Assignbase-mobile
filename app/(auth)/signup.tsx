import { router } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useColorScheme } from 'nativewind';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { auth } from '../../firebase.config';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { colorScheme } = useColorScheme();

  const handleSignUp = async () => {
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Account created successfully!');
      // You can navigate to another screen or clear the form here
      // const user = userCredential.user;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white dark:bg-dark-background"
    >
      <View className="flex-1 p-5 justify-center">
        <Text className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Create Account
        </Text>
        {error ? (
          <Text className="text-red-500 mb-2.5 text-center">{error}</Text>
        ) : null}
        {success ? (
          <Text className="text-green-500 mb-2.5 text-center">{success}</Text>
        ) : null}
        
        <View className="mb-5">
          <Text className="text-base mb-2 text-gray-800 dark:text-white">
            Email
          </Text>
          <TextInput
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-base bg-gray-50 dark:bg-dark-component text-gray-800 dark:text-white"
            placeholder="Enter your email"
            placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
        </View>

        <View className="mb-5">
          <Text className="text-base mb-2 text-gray-800 dark:text-white">
            Password
          </Text>
          <TextInput
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-base bg-gray-50 dark:bg-dark-component text-gray-800 dark:text-white"
            placeholder="Create a password"
            placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password-new"
          />
        </View>

        <View className="mb-5">
          <Text className="text-base mb-2 text-gray-800 dark:text-white">
            Confirm Password
          </Text>
          <TextInput
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-base bg-gray-50 dark:bg-dark-component text-gray-800 dark:text-white"
            placeholder="Confirm your password"
            placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password-new"
          />
        </View>

        <TouchableOpacity 
          className="bg-blue-500 p-4 rounded-lg items-center mt-2.5"
          onPress={handleSignUp}
        >
          <Text className="text-white text-lg font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="mt-5 items-center"
          onPress={() => router.push('/signin')}
        >
          <Text className="text-blue-500 text-base">
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
