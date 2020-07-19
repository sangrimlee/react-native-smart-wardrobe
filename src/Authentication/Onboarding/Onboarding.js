import React, { useRef } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";
import {
    useValue,
    interpolateColor,
    useScrollHandler,
} from "react-native-redash";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";
const { width, height } = Dimensions.get("window");
const BORDER_RADIUS = 72;

const Onboarding = () => {
    const scrollRef = useRef();
    const { scrollHandler, x } = useScrollHandler();

    const slides = [
        {
            label: "Relaxed",
            color: "cyan",
            title: "Destination",
            description:
                "There are many variations of passages of Lorem Ipsum available.",
        },
        {
            label: "Playful",
            color: "red",
            title: "Ticket Booking",
            description:
                "Contrary to popular belief, Lorem Ipsum is not simply random text.",
        },
        {
            label: "Excentric",
            color: "blue",
            title: "Enjoy Your Holiday",
            description:
                "There are many variations of passages of Lorem Ipsum available.",
        },
        {
            label: "Funky",
            color: "skyblue",
            title: "Hotel Booking",
            description:
                "But the majority have suffered alteration in some form",
        },
    ];

    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map((slide) => slide.color),
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    ref={scrollRef}
                    {...scrollHandler}
                >
                    {slides.map(({ label }, index) => (
                        <Slide
                            key={index}
                            right={!!(index % 2)}
                            {...{ label }}
                        />
                    ))}
                </Animated.ScrollView>
            </Animated.View>

            <View style={styles.footer}>
                <Animated.View
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        backgroundColor,
                    }}
                />

                <View style={styles.footerContainer}>
                    <View style={styles.pagination}>
                        {slides.map((_, index) => (
                            <Dot
                                key={index}
                                currentIndex={divide(x, width)}
                                {...{ index, x }}
                            />
                        ))}
                    </View>
                    <Animated.View
                        style={{
                            width: width * slides.length,
                            transform: [{ translateX: multiply(x, -1) }],
                            flexDirection: "row",
                        }}
                    >
                        {slides.map(({ title, description }, index) => (
                            <SubSlide
                                onPress={() => {
                                    if (scrollRef.current) {
                                        scrollRef.current.getNode().scrollTo({
                                            x: width * (index + 1),
                                            animated: true,
                                        });
                                    }
                                }}
                                key={index}
                                last={index === slides.length - 1}
                                {...{ title, description }}
                            />
                        ))}
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75,
    },
    footer: {
        flex: 1,
    },
    footerContainer: {
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: 48,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Onboarding;
