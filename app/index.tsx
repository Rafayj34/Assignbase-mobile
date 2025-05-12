import { Link, router } from "expo-router";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";
import { auth } from "../firebase.config";

export default function Index() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      // Optionally handle error
    }
  };

  return (
    <View className="flex-1 dark:bg-dark-background">
      {user ? (
        <>
          <Text className="text-2xl font-bold text-light-text dark:text-dark-text">Logged in as: {user.email}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text className="text-2xl font-bold text-light-text dark:text-dark-text">Not logged in.</Text>
         <Pressable onPress={() => router.push({ pathname: "/signin" })}>
          <View className="bg-light-primary dark:bg-primary bg-secondary p-4 rounded-md"> 
            <Text className="text-2xl font-bold text-light-text dark:text-dark-text">Sign In</Text>

          </View>
         </Pressable>
            <Link className="mt-20" href="/(student)/student/dashboard">
              <Text className="text-2xl font-bold text-light-text dark:text-dark-text">Dashboard</Text>
            </Link>
        </>
      )}
    </View>
  );
}
