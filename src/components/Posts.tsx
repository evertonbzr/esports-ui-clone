import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { useEffect, useState } from "react";

import classNames from "classnames";
import colors from "tailwindcss/colors";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

export const PostCard = () => {
  const avatar = classNames("w-14 h-14 bg-slate-500 rounded-full border-2 ", {
    "border-green-600": true,
  });
  return (
    <View className="mt-8">
      <View className="flex-row">
        <View className="flex-row">
          <View className="z-50 border-2 rounded-full border-[#24272C] ">
            <View className={avatar}>
              <Image
                className="w-full h-full rounded-full"
                source={{
                  uri: "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/7d/7db937d95666efe34c3662b4d6c1214688e6f2db_full.jpg",
                }}
              />
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.9}>
            <View className="ml-2">
              <Text className="font-bold text-white">Everton Fernandes</Text>
              <Text className="font-bold text-[#5F666E]">Counter Strike</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className="ml-auto w-6 h-6">
          <TouchableOpacity activeOpacity={0}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={28}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        className="w-full aspect-video rounded relative"
        style={{
          marginTop: -8,
        }}
      >
        <Image
          className="w-full h-full rounded"
          source={{
            uri: "https://i.ytimg.com/vi/pEn8dOtOLqg/hqdefault.jpg",
          }}
        />
        <View
          key="backdrop"
          className="absolute bottom-0 top-0 left-0 right-0 rounded"
        >
          <View className="w-full h-full rounded relative">
            <View className="absolute bottom-3 left-3">
              <View className="bg-black/70 p-1 px-3 rounded-full">
                <Text className="text-white font-bold">12:15</Text>
              </View>
            </View>
            <View className="absolute top-3 right-3">
              <View className="bg-green-500/70 rounded-full w-12 h-12 items-center justify-center">
                <Text className="text-white font-bold">
                  <MaterialIcons name="play-arrow" size={24} color="black" />
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mt-3">
        <View className="pr-2">
          <Text
            numberOfLines={1}
            className="text-white font-medium text-base tracking-wide"
          >
            What was that?! Watch this my friends 😁😁 ! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Illo, beatae fugit sit rem
            debitis cupiditate! Quo saepe, sapiente temporibus minus dolore
            dicta nobis. Impedit quam ea reprehenderit ratione, eos aliquam!
          </Text>
        </View>
        <View className="flex-row mt-2">
          <View className="flex-row">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="heart-outline"
                color={colors.green[500]}
                size={20}
              />
              <Text className="text-green-500 font-bold ml-1">12 445</Text>
            </View>
            <View className="flex-row items-center ml-5">
              <Octicons name="comment" size={18} color="white" />
              <Text className="text-white font-bold ml-2">344</Text>
            </View>
          </View>
          <View className="ml-auto">
            <Text className="text-[#5F636C] font-bold tracking-wide">
              3 hours ago
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export const PostsList = () => {
  const tabBarHeight = useBottomTabBarHeight();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("chamou");
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: tabBarHeight + 42,
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size={24} />
          </View>
        ) : (
          <>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </>
        )}
      </ScrollView>
    </View>
  );
};
