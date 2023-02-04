import { ScrollView, useWindowDimensions, View } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import classNames from "classnames";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "../components/HomeHeader";
import { StoriesSession } from "../components/StoriesSession";
import { TabHomeSession } from "../components/TabHomeSession";
import { grayBg } from "../constants/colors";

const Tab = createMaterialTopTabNavigator();

const Exe = () => {
  return <View className="flex-1"></View>;
};

const renderScene = SceneMap({
  all: Exe,
  cs: Exe,
  lol: Exe,
  dota: Exe,
});
export const HomeScreen: React.FC = () => {
  const dividerClasses = classNames("w-full h-0.5", grayBg);

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "all", title: "All games" },
    { key: "cs", title: "Counter Strike" },
    { key: "lol", title: "League of Legends" },
    { key: "dota", title: "Dota 2" },
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
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          style={{ height: 100 }}
          sceneContainerStyle={{ height: 100 }}
          renderTabBar={(props) => <TabHomeSession {...props} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
