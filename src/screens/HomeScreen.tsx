import React, { createRef } from "react";
import { SceneMap, TabView } from "react-native-tab-view";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";

import { HomeHeader } from "../components/HomeHeader";
import { PostsList } from "../components/Posts";
import { SafeAreaView } from "react-native-safe-area-context";
import { StoriesSession } from "../components/StoriesSession";
import { TabHomeSession } from "../components/TabHomeSession";
import classNames from "classnames";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { grayBg } from "../constants/colors";

const Tab = createMaterialTopTabNavigator();

const Exe = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-white">Olá</Text>
    </View>
  );
};

const renderScene = SceneMap({
  all: PostsList,
  cs: PostsList,
  lol: PostsList,
  dota: PostsList,
});
export const HomeScreen: React.FC = () => {
  const dividerClasses = classNames("w-full h-0.5", grayBg);

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "all", title: "Tudo", ref: createRef<View>() },
    { key: "cs", title: "Jogadas em destaque", ref: createRef<View>() },
    { key: "lol", title: "Jogadores em destaque", ref: createRef<View>() },
    { key: "dota", title: "Seguindo", ref: createRef<View>() },
  ]);

  return (
    <SafeAreaView className="flex-1 bg-black">
      <HomeHeader />
      <View className={dividerClasses} />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: "#24272C",
        }}
      >
        <StoriesSession />
        <TabView
          lazy
          navigationState={{ index, routes }}
          renderScene={renderScene}
          swipeEnabled={true}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => <TabHomeSession {...props} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
