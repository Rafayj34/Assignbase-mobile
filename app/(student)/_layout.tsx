import { AntDesign, Feather, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'



const StudentLayout = () => {
  const { colorScheme } = useColorScheme();
  const tabBarStyle = {
    backgroundColor: colorScheme === 'dark' ? '#151515' : '#FAFAFA',
    borderTopWidth: 0,
    height: 70,
    paddingBottom: 10,
    paddingTop: 10,
  }
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle,
        tabBarActiveTintColor: '#5645EE',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#FAFAFA' : '#151515',
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'student/dashboard/index':
              return <Feather name="home" size={22} color={color} />
            case 'student/alljobs/index':
              return <MaterialIcons name="work-outline" size={22} color={color} />
            case 'student/ongoingprojects/index':
              return <FontAwesome5 name="history" size={22}  color={color} />
            case 'student/projecthistory/index':
              return <Ionicons name="timer-outline" size={22} color={color} />
            case 'student/chat/index':
              return <AntDesign name="message1" size={22} color={color} />
            default:
              return null
          }
        },
      })}
    >
      <Tabs.Screen name="student/dashboard/index" options={{ tabBarLabel: 'Home' }} />
      <Tabs.Screen name="student/alljobs/index" options={{ tabBarLabel: 'All Jobs' }} />
      <Tabs.Screen name="student/ongoingprojects/index" options={{ tabBarLabel: 'Ongoing' }} />
      <Tabs.Screen name="student/projecthistory/index" options={{ tabBarLabel: 'Previous' }} />
      <Tabs.Screen name="student/chat/index" options={{ tabBarLabel: 'Chat' }} />
    </Tabs>
    // <Stack>
     
    //   <Stack.Screen name="student/dashboard/index"  options={{ headerShown: false }} />
    // </Stack>
  )
}

export default StudentLayout