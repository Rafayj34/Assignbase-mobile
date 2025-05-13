import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
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

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { colorScheme } = useColorScheme();

  const handleSignIn = async () => {
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/');
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
          Sign In
        </Text>
        {error ? (
          <Text className="text-red-500 mb-2.5 text-center">{error}</Text>
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
            placeholder="Enter your password"
            placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoComplete="password"
          />
        </View>

        <TouchableOpacity 
          className="bg-blue-500 p-4 rounded-lg items-center mt-2.5"
          onPress={handleSignIn}
        >
          <Text className="text-white text-lg font-semibold">
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          className="mt-5 items-center"
          onPress={() => router.push({ pathname: '/signup' })}
        >
          <Text className="text-blue-500 text-base">
            Don't have an account? Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
