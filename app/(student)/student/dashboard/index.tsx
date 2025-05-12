import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { LayoutChangeEvent, ScrollView, Text, TouchableOpacity, View } from "react-native";

// Sample data for projects
const projectsData = [
  {
    id: "1",
    projectName: "E-commerce Website Development",
    jobStatus: "In Progress",
    studentName: "John Doe",
    paymentStatus: "Paid",
  },
  {
    id: "2",
    projectName: "Mobile App UI/UX Design",
    jobStatus: "Completed",
    studentName: "Sarah Smith",
    paymentStatus: "Pending",
  },
  {
    id: "3",
    projectName: "Database Optimization",
    jobStatus: "Not Started",
    studentName: "Mike Johnson",
    paymentStatus: "Unpaid",
  },
  {
    id: "4",
    projectName: "API Integration",
    jobStatus: "In Progress",
    studentName: "Emily Brown",
    paymentStatus: "Paid",
  },
  {
    id: "5",
    projectName: "Frontend Development",
    jobStatus: "Completed",
    studentName: "David Wilson",
    paymentStatus: "Paid",
  },
];

const Dashboard = () => {
  const { colorScheme } = useColorScheme();
  const [rowHeights, setRowHeights] = useState(Array(projectsData.length).fill(0));

  // Handler to update row height when measured
  const onProjectNameLayout = (event: LayoutChangeEvent, idx: number) => {
    const { height } = event.nativeEvent.layout;
    setRowHeights((prev) => {
      const updated = [...prev];
      updated[idx] = height;
      return updated;
    });
  };

  return (
    <ScrollView scrollEnabled className="flex-1 bg-light-background dark:bg-dark-background px-3 text-sm">
      <View className="flex-col gap-5">
        {/* Header */}
        <View className="flex-col gap-2">
          <View className="">
            <Text className="text-light-text dark:text-dark-text text-2xl font-bold">
              Hello John Doe
            </Text>
          </View>
          <View className="">
            <Text className="text-light-text dark:text-dark-text text-sm">
              Welcome to the dashboard
            </Text>
          </View>
        </View>

        {/* Previous Project Progress */}
        <View className="flex gap-3">
          <Text className="text-light-text dark:text-dark-text text-2xl font-bold">
            Previous Project Progress{" "}
            <Text className="text-sm">(Last 30 Days)</Text>
          </Text>

          <View className="flex-row items-end justify-end">
            <TouchableOpacity className="w-[100px] bg-light-component dark:bg-dark-component rounded-lg p-2">
              <Text className="text-light-text dark:text-dark-text text-sm text-center">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between  gap-4">
            {/* ----------------------------------------------------------------------------------------------------- */}

            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>

            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center justify-between  gap-4">
            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>

            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>
          </View>

          {/* ----------------------------------------------------------------------------------------------------- */}
        </View>

        {/* ----------------------------------------------------------------------------------------------------- */}
        {/* Previous Project Progress */}
        <View className="flex gap-3">
          <Text className="text-light-text dark:text-dark-text text-2xl font-bold">
            Previous Project Progress{" "}
            <Text className="text-sm">(Last 30 Days)</Text>
          </Text>

          <View className="flex-row items-end justify-end">
            <TouchableOpacity className="w-[100px] bg-light-component dark:bg-dark-component rounded-lg p-2">
              <Text className="text-light-text dark:text-dark-text text-sm text-center">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between  gap-4">
            {/* ----------------------------------------------------------------------------------------------------- */}

            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>

            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row items-center justify-between  gap-4">
            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>

            <View className="flex-row p-4 bg-light-component dark:bg-dark-component items-center gap-2 rounded-lg">
              <View className="flex-col items-center gap-2">
                <View className="flex-row items-center gap-4">
                  <Ionicons
                    name="briefcase-outline"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                  <Text className="text-light-text dark:text-dark-text text-sm">
                    Jobs Management
                  </Text>
                </View>
                <Text className="text-light-text dark:text-dark-text text-sm">
                  19
                </Text>
              </View>
            </View>
          </View>

          {/* ----------------------------------------------------------------------------------------------------- */}
        </View>
        <View className="flex gap-3 pb-3">
          <Text className="text-light-text dark:text-dark-text text-2xl font-bold">
            Projects List
          </Text>
          <View style={{ position: 'relative', minHeight: 60 * (projectsData.length + 1) }}>
            {/* Sticky Project Name Column (Header + Rows) */}
            <View style={{ position: 'absolute', left: 0, top: 0, zIndex: 10 }}>
              {/* Header */}
              <View className="w-[200px] bg-light-component dark:bg-dark-component p-4 rounded-tl-lg">
                <Text className="text-light-text dark:text-dark-text font-bold">Project Name</Text>
              </View>
              {/* Rows */}
              {projectsData.map((item, idx) => (
                <View
                  key={item.id}
                  className="w-[200px] bg-light-component dark:bg-dark-component p-4 border-t border-gray-200 dark:border-gray-700"
                  style={{ height: rowHeights[idx] > 0 ? rowHeights[idx] : undefined }}
                  onLayout={event => onProjectNameLayout(event, idx)}
                >
                  <Text className="text-light-text dark:text-dark-text">{item.projectName}</Text>
                </View>
              ))}
            </View>

            {/* Scrollable Table (Headers + Rows) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 200 }}>
              <View style={{ width: 600 }}>
                {/* Header */}
                <View className="flex-row bg-light-component dark:bg-dark-component p-4 rounded-tr-lg" style={{ minHeight: 28 }}>
                  <View className="w-[120px]">
                    <Text className="text-light-text dark:text-dark-text font-bold">Status</Text>
                  </View>
                  <View className="w-[150px]">
                    <Text className="text-light-text dark:text-dark-text font-bold">Student</Text>
                  </View>
                  <View className="w-[100px]">
                    <Text className="text-light-text dark:text-dark-text font-bold">Payment</Text>
                  </View>
                </View>
                {/* Rows */}
                {projectsData.map((item, idx) => (
                  <View
                    key={item.id}
                    className="flex-row bg-light-component dark:bg-dark-component p-4 border-t border-gray-200 dark:border-gray-700 items-center"
                    style={{ height: rowHeights[idx] > 0 ? rowHeights[idx] : undefined }}
                  >
                    <View className="w-[120px]">
                      <Text className="text-light-text dark:text-dark-text">{item.jobStatus}</Text>
                    </View>
                    <View className="w-[150px]">
                      <Text className="text-light-text dark:text-dark-text">{item.studentName}</Text>
                    </View>
                    <View className="w-[100px]">
                      <Text className="text-light-text dark:text-dark-text">{item.paymentStatus}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
