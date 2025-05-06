import Navbar from "@/components/Navbar";
import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";

function ThemedStatusBar() {
  const { colorScheme } = useColorScheme();
  return <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      {/* <SafeAreaView className="flex-1"> */}
        <Navbar />
        <ThemedStatusBar />
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
      {/* </SafeAreaView> */}
    </AuthProvider>
  );
}
