// /app/index.tsx
import { useAuth } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import { useColorScheme } from "nativewind";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { user, loading } = useAuth();
  const { colorScheme } = useColorScheme();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-light-background dark:bg-dark-background">
        <ActivityIndicator size="large" color={colorScheme === "dark" ? "#fff" : "#000"} />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/(auth)/signin" />;
  }

  return <Redirect href="/(student)/student/dashboard" />;
}
