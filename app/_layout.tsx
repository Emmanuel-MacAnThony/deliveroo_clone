import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import CustomHeader from "../components/CustomHeader";
import { Stack, useNavigation } from "expo-router";
import Colors from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ header: () => <CustomHeader /> }}
        />
        <Stack.Screen
          name="(modal)/filter"
          options={{
            presentation: "modal",
            gestureEnabled: true,
            headerTitle: "Filter",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: Colors.lightGrey,
            },
            headerLeft: () => {
              return (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="arrow-back"
                    size={28}
                    color={Colors.primary}
                    style={{
                      marginRight: 20,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
