import { Image, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import { LinearGradient } from "expo-linear-gradient";
import colors from "tailwindcss/colors";
import { useNavigation } from "@react-navigation/native";

export const HeaderProfile = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <View className="relative">
        <Image
          className="w-full aspect-square"
          source={{
            uri: "https://images.unsplash.com/photo-1618193139062-2c5bf4f935b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            // uri: "https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <View className="absolute bottom-0 top-0 left-0 right-0">
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.2)", "rgba(0,0,0,0.8)"]}
            className="flex-1 p-4 justify-between"
          >
            <View className="flex-row justify-between items-center">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.pop()}
              >
                <View className="w-10 h-10 bg-black rounded-full items-center justify-center">
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={28}
                    color={colors.green[500]}
                  />
                </View>
              </TouchableOpacity>
              <View>
                <Text className="text-white font-bold">evertonfrnds</Text>
              </View>
              <View className="w-10 h-10">
                <Image
                  className="w-full aspect-square rounded-full"
                  source={{
                    uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7d/7db937d95666efe34c3662b4d6c1214688e6f2db_full.jpg",
                  }}
                />
              </View>
            </View>
            <View>
              <View>
                <Text className="text-green-500 font-bold text-lg">
                  Pro Player
                </Text>
                <Text className="text-white font-bold text-4xl mt-3">
                  Everton {"\n"}Fernandes
                </Text>
              </View>
              <View className="flex-row mt-3">
                <TouchableOpacity activeOpacity={0.8}>
                  <View className="w-44 h-11 bg-green-500 py-2 px-4 rounded-full items-center justify-center">
                    <Text className="font-bold text-lg">Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                  <View className="w-11 h-11 border-2 border-[#24272C] rounded-full items-center justify-center ml-3">
                    <MaterialCommunityIcons
                      name="dots-vertical"
                      size={24}
                      color={colors.green[500]}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};
