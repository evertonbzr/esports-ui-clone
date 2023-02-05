import React, { createRef } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import { View, useWindowDimensions } from "react-native";

import { HeaderProfile } from "../components/HeaderProfile";
import { InfoProfile } from "../components/InfoProfile";
import { PostsProfile } from "../components/PostsProfile";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabHomeSession } from "../components/TabHomeSession";

export const Exe = () => {
  return <View className="flex-1 bg-red-400" />;
};

const renderScene = SceneMap({
  posts: PostsProfile,
  videos: PostsProfile,
  about: PostsProfile,
  stats: PostsProfile,
  links: PostsProfile,
});

export const Profile = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "posts", title: "Posts", ref: createRef<View>() },
    { key: "videos", title: "Videos", ref: createRef<View>() },
    { key: "about", title: "About", ref: createRef<View>() },
    { key: "stats", title: "Stats", ref: createRef<View>() },
    { key: "links", title: "Links", ref: createRef<View>() },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <HeaderProfile />
      <View className="w-full h-0.5 bg-[#2B323A]" />
      <InfoProfile />
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        swipeEnabled={false}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        renderTabBar={(props) => <TabHomeSession fixed {...props} />}
      />
    </SafeAreaView>
  );
};
