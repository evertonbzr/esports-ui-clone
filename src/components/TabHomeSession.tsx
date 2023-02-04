import {
  createRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import { NavigationState, SceneRendererProps } from "react-native-tab-view";

import classNames from "classnames";

type TabItemProps = {
  title: string;
  active?: boolean;
  onPress: () => void;
  test?: string;
};

const TabItem = forwardRef<View, TabItemProps>(
  ({ title, active = false, onPress, test }, ref) => {
    const isActive = useDerivedValue(() => {
      return active
        ? withTiming(1, { duration: 100 })
        : withTiming(0, { duration: 100 });
    });

    const textColor = useAnimatedStyle(() => {
      const color = interpolateColor(
        isActive.value,
        [0, 1],
        ["#5F666E", "#FFF"]
      );

      return {
        color,
      };
    });

    const textClass = classNames("font-bold");
    const container = classNames(
      "items-center justify-center h-full px-3",
      test
    );

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <View className={container} ref={ref}>
          <Animated.Text className={textClass} style={textColor}>
            {title}
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  }
);

const Indicator = () => {
  return (
    <View
      className="w-24 h-0.5 bg-green-600 absolute z-50"
      style={{
        bottom: 0,
      }}
    />
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
  const containerRef = useRef<any>();
  const [measures, setMeasures] = useState<any[]>([]);
  const {
    navigationState: { routes, index },
    jumpTo,
  } = props;

  const mappedRoutes = useMemo(() => {
    return routes.map((route) => ({ ...route, ref: createRef<View>() }));
  }, [routes]);

  useEffect(() => {
    const m: any[] = [];
    mappedRoutes.forEach((item) => {
      item.ref.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          // console.log(x, y, width, height);
          m.push({
            x,
            y,
            width,
            height,
          });

          if (m.length === mappedRoutes.length) {
            setMeasures(m);
          }
        },
        () => {}
      );
    });
  }, [mappedRoutes]);

  return (
    <View className="h-14 bg-[#1C1F24]">
      <ScrollView
        ref={containerRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          position: "relative",
        }}
      >
        {mappedRoutes.map((el, i) => (
          <TabItem
            ref={el.ref}
            key={el.key}
            title={el.title}
            active={i === index}
            onPress={() => jumpTo(el.key)}
            test={
              i === 0 ? "ml-3" : i + 1 === routes.length ? "mr-3" : undefined
            }
          />
        ))}
        <Indicator />
        <View className="h-0.5 bg-[#393D46] w-full absolute bottom-0" />
      </ScrollView>
    </View>
  );
};
