import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import SubSlide from "./SubSlide";
import Dot from "./Dot";

const { width, height } = Dimensions.get("window");
const BORDER_RADIUS = 72;

const Onboarding = ({ navigation }) => {
    const scrollRef = useRef();
    const { scrollHandler, x } = useScrollHandler();

    const slides = [
        {
            label: "Weather",
            color: "cyan",
            title: "Find Your Outfits",
            description:
                "Confused about your outfit? Don't worry!\nFind the best outfit here!",
        },
        {
            label: "Style",
            color: "red",
            title: "Here it First, Wear it First",
            description:
                "Hating the clothes in your wardrobe? \nExplore hundreds of outfit ideas.",
        },
        {
            label: "Occasion",
            color: "blue",
            title: "Your Style, Your Way",
            description:
                "Create your individual & unique style and look amazing everyday.",
        },
        {
            label: "Enjoy",
            color: "skyblue",
            title: "Look Good, Feel Good",
            description:
                "Discover the latest trends in fashion and explore your personality.",
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
                    {slides.map(({ label, picture }, index) => (
                        <Slide
                            key={index}
                            right={!!(index % 2)}
                            {...{ label, picture }}
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
                                    if (index + 1 == slides.length) {
                                        navigation.navigate("Welcome");
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
