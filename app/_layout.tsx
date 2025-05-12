import Navbar from "@/components/Navbar";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";
function ThemedStatusBar() {
  const { colorScheme } = useColorScheme();
  return <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />;
}

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  return (
      <SafeAreaProvider>
    <AuthProvider>
      <SafeAreaView style={{backgroundColor: colorScheme === "dark" ? "#151515" : "#FAFAFA"}} className="flex-1">
      <ThemedStatusBar />
      <Navbar />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(student)" options={{ headerShown: false }} />
      </Stack>
      </SafeAreaView>
    </AuthProvider>
      </SafeAreaProvider>
  );
}
