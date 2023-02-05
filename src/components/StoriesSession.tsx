import { Image, ScrollView, View } from "react-native";
import { blackBg, classNames } from "../constants/colors";

import { MaterialIcons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

const Storie = ({ hasStory = true }: { hasStory?: boolean }) => {
  const container = classNames(
    "w-14 h-14 mx-2 bg-slate-600 rounded-full border-2",
    {
      "border-green-600": hasStory,
    }
  );
  return (
    <View className={container}>
      <Image
        className="w-full h-full rounded-full"
        source={{
          uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7d/7db937d95666efe34c3662b4d6c1214688e6f2db_full.jpg",
        }}
      />
    </View>
  );
};

export const StoriesSession = () => {
  const container = classNames("h-28", blackBg);
  return (
    <View className={container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 8,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className="w-14 h-14 mx-2 items-center justify-center rounded-full border-dashed border-2 border-green-600">
          <MaterialIcons name="add" size={24} color={colors.white} />
        </View>
        <Storie />
        <Storie />
        <Storie hasStory={false} />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
        <Storie />
      </ScrollView>
    </View>
  );
};
