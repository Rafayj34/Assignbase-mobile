import { useAuth } from '@/context/AuthContext';
import { auth } from '@/firebase.config';
import { Ionicons } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { ActivityIndicator, Image, Pressable, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
export default function Navbar() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { user , loading} = useAuth();

  return (
    <View className="pt-1 flex-row items-center justify-between px-4 py-2 bg-light-background dark:bg-dark-background">
      <Image
        source={require('../assets/images/logo.png')}
        // className='w-44 h-10'
        style={{width: wp('40%'), height: hp('5%')}}
        resizeMode="contain"
      />
      <Pressable
        onPress={toggleColorScheme}
        className="w-12 h-12 rounded-full items-center justify-center bg-light-primary dark:bg-dark-primary"
        style={({ pressed }) => [
          {
            transform: [{ scale: pressed ? 0.95 : 1 }],
            shadowColor: colorScheme === 'dark' ? '#000' : '#666',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      >
        {colorScheme === 'dark' ? (
          <Ionicons name="sunny" size={24} color="#FFD700" />
        ) : (
          <Ionicons name="moon" size={24} color="#4B0082" />
        )}
      </Pressable>
      {user ? (
        <Pressable onPress={() => signOut(auth)}>
          <Ionicons name="log-out" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
        </Pressable>
      ) : loading ? (
        <ActivityIndicator size="large" color={colorScheme === 'dark' ? '#fff' : '#000'} />
      ) : (
       <Ionicons name="log-in" size={24} color={colorScheme === 'dark' ? '#fff' : '#000'} />
      )}
    </View>
  );
} 