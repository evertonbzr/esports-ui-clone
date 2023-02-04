import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NavigationState, SceneRendererProps } from "react-native-tab-view";

import classNames from "classnames";

const TabItem = ({
  title,
  active = false,
  onPress,
}: {
  title: string;
  active?: boolean;
  onPress: () => void;
}) => {
  const textClass = classNames("font-bold text-[#5F666E]", {
    "text-white": active,
  });
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View className=" items-center justify-center h-full px-3">
        <Text className={textClass}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const TabHomeSession: React.FC<
  SceneRendererProps & {
    navigationState: NavigationState<{
      key: string;
      title: string;
    }>;
  }
> = (props) => {
  const {
    navigationState: { routes, index },
    jumpTo,
  } = props;
  console.log(props);
  return (
    <View className="h-14 bg-[#1C1F24]">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
        }}
      >
        {routes.map((el, i) => (
          <TabItem
            key={el.key}
            title={el.title}
            active={i === index}
            onPress={() => jumpTo(el.key)}
          />
        ))}
      </ScrollView>
    </View>
  );
};
