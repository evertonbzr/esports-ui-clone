import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export const BottomTabs: React.FC<BottomTabBarProps> = (
  props: BottomTabBarProps
) => {
  const navigation = useNavigation<any>();
  return (
    <LinearGradient
      colors={["transparent", "rgba(0,0,0,0.3)", "rgba(0,0,0,0.5)"]}
      className="absolute bottom-0 w-full h-20 items-center justify-center p-4"
    >
      <View className="sm:w-full md:w-96 flex-row">
        <TouchableOpacity activeOpacity={0.8}>
          <View className="w-14 h-14 rounded-full items-center justify-center bg-green-500">
            <MaterialIcons name="add" size={28} color="black" />
          </View>
        </TouchableOpacity>
        <View className="flex-1 ml-4 h-full justify-center bg-black rounded-full">
          <View className="flex-row justify-evenly rounded-full">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Home")}
            >
              <View>
                <MaterialCommunityIcons
                  name="home-outline"
                  size={24}
                  color={colors.green[500]}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Profile")}
            >
              <View>
                <MaterialIcons name="search" size={24} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <View>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  size={24}
                  color="white"
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <View>
                <MaterialIcons name="mail-outline" size={24} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
