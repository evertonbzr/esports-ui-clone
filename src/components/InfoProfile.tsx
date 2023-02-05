import { Text, View } from "react-native";

export const InfoProfile = () => {
  return (
    <View className="w-full px-8 py-4 bg-black flex-row justify-between">
      <View>
        <Text className="font-bold text-lg text-white">543 978</Text>
        <Text className="font-bold text-green-500">Followers</Text>
      </View>
      <View>
        <Text className="font-bold text-lg text-white text-center">842</Text>
        <Text className="font-bold text-green-500">Following</Text>
      </View>
      <View>
        <Text className="font-bold text-lg text-white text-end ">173</Text>
        <Text className="font-bold text-green-500">Posts</Text>
      </View>
    </View>
  );
};
