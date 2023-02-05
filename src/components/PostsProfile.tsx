import { Dimensions, Image, ScrollView, View } from "react-native";

const POST_WIDTH = Dimensions.get("screen").width - 8 - 34;

export const PostImage = () => {
  return (
    <View
      className="mx-1 my-1 rounded"
      style={{
        width: POST_WIDTH / 3,
      }}
    >
      <Image
        className="w-full aspect-square rounded"
        source={{
          uri: "https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
    </View>
  );
};

export const PostsProfile = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: "row",
        padding: 4,
        flexWrap: "wrap",
        backgroundColor: "#24272C",
      }}
    >
      <PostImage />
      <PostImage />
      <PostImage />
      <PostImage />
      <PostImage />
      <PostImage />
    </ScrollView>
  );
};
