import Navbar from "@/components/Navbar";
import { QueryProvider } from "@/context/QueryProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AuthProvider } from "../context/AuthContext";
import { ThemeProvider } from "../context/ThemeProvider";
import "./globals.css";

function ThemedStatusBar() {
  const { colorScheme } = useColorScheme();
  return <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />;
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <View className="flex-1 bg-light-background dark:bg-dark-background">
        <SafeAreaProvider>
          <AuthProvider>
            <QueryProvider>
              <SafeAreaView className="flex-1">
                <ThemedStatusBar />
                <Navbar />
                <Stack>
                  <Stack.Screen name="index" options={{ headerShown: false }} />
                  <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                  <Stack.Screen name="(student)" options={{ headerShown: false }} />
                </Stack>
              </SafeAreaView>
            </QueryProvider>
          </AuthProvider>
        </SafeAreaProvider>
      </View>
    </ThemeProvider>
  );
}
