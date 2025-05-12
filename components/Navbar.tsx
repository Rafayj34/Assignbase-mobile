import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'nativewind';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Navbar() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

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
    </View>
  );
} 