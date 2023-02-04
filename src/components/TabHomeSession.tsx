import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { NavigationState, SceneRendererProps } from "react-native-tab-view";
import { TouchableOpacity, View } from "react-native";
import {
  createRef,
  forwardRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import classNames from "classnames";

const ANIMATION_DURATION = 300;

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
        ? withTiming(1, { duration: ANIMATION_DURATION })
        : withTiming(0, { duration: ANIMATION_DURATION });
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

const Indicator = ({ measures, index }: { measures: any[]; index: number }) => {
  const indexShared = useSharedValue(index);

  useEffect(() => {
    indexShared.value = withTiming(index, { duration: ANIMATION_DURATION });
  }, [index]);

  const inputRange = measures.map((_, i) => i);

  const style = useAnimatedStyle(() => {
    const left = interpolate(
      indexShared.value,
      inputRange,
      measures.map((el) => el.x),
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      }
    );

    const width = interpolate(
      indexShared.value,
      inputRange,
      measures.map((el) => el.width),
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      }
    );
    return {
      bottom: 0,
      width,
      left,
    };
  });
  return (
    <Animated.View className="h-0.5 bg-green-600 absolute z-50" style={style} />
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
  const scrollX = useSharedValue(0);

  const {
    navigationState: { routes, index },
    jumpTo,
    position,
  } = props;

  const mappedRoutes = useMemo(() => {
    return routes.map((route) => ({ ...route, ref: createRef<View>() }));
  }, [routes]);

  useEffect(() => {
    console.log("entrou ");
    const m: any[] = [];
    mappedRoutes.forEach((item) => {
      item.ref.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
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
  }, [mappedRoutes, props]);

  useEffect(() => {}, [index]);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View className="h-14 bg-[#1C1F24]">
      <Animated.ScrollView
        ref={containerRef}
        horizontal
        onScroll={scrollHandler}
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
            onPress={() => {
              jumpTo(el.key);
            }}
            test={
              i === 0 ? "ml-3" : i + 1 === routes.length ? "mr-3" : undefined
            }
          />
        ))}
        {measures.length > 0 && <Indicator measures={measures} index={index} />}
        <View className="h-0.5 bg-[#393D46] w-full absolute bottom-0" />
      </Animated.ScrollView>
    </View>
  );
};
