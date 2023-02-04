import { Image, Text, View } from "react-native";
import { blackBg, classNames } from "../constants/colors";

import { Octicons } from "@expo/vector-icons";
import React from "react";

export const HomeHeader: React.FC = () => {
  const container = classNames(
    "w-100 h-24 bg-black flex-row items-center justify-between p-6",
    blackBg
  );
  return (
    <View className={container}>
      <View className="">
        <Octicons name="three-bars" size={24} color="white" />
      </View>
      <View>
        <Text className="font-extrabold text-lg">
          <Text className="text-green-600">e</Text>
          <Text className="text-white">Sports</Text>
        </Text>
      </View>
      <View className="w-10 h-10 rounded-full">
        <Image
          className="w-full h-full rounded-full"
          source={{
            uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7d/7db937d95666efe34c3662b4d6c1214688e6f2db_full.jpg",
          }}
        />
      </View>
    </View>
  );
};
