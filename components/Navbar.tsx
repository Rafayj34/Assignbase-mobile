import { useColorScheme } from 'nativewind';
import React from 'react';
import { Image, Switch, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function Navbar() {

  const {colorScheme,toggleColorScheme} = useColorScheme();
  return (
    <View className="pt-10 flex-row items-center justify-between px-4 py-2 bg-light-background dark:bg-dark-background">
      <Image
        source={require('../assets/images/logo.png')}
        // className='w-44 h-10'
        style={{width: wp('40%'), height: hp('5%')}}
        resizeMode="contain"
      />
      <Switch
        value={colorScheme === 'dark'}
        onChange={toggleColorScheme}
        className='bg-light-primary dark:bg-dark-primary'
      />
        

    </View>
  );
} 