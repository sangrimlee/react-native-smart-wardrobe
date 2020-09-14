import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ItemCard } from "../Components";
const DATA = [
    {
        id: "1",
        imageUrl:
            "http://fr8ight.co.kr/web/product/extra/small/20200413/ae44a33ab80a0ecbcc25a0bb4f0f0cc2.jpg",
        title: "UTILITY FIELD HALF SHIRT / BLUE STRIPE OXFORD",
        category: "상의",
    },
    {
        id: "2",
        imageUrl:
            "http://fr8ight.co.kr/web/product/extra/small/20200323/05bfb01b04f79d2a1c6dbe89e9f87846.jpg",
        title: "COMBAT PANTS / NAVY NYLON WASHER",
        category: "하의",
    },
    {
        id: "3",
        imageUrl:
            "http://fr8ight.co.kr/web/product/extra/small/20200309/b7bcdf233dbb6a66766efa9f77d969d2.jpg",
        title: "CBA SHIRT / BEIGE STRIPE",
        category: "상의",
    },
    {
        id: "4",
        imageUrl:
            "http://fr8ight.co.kr/web/product/extra/small/20200416/dc9054c194718896bdc7ed35a84eaa53.jpg",
        title: "CONTRAST STITCH SHORTS / OCEAN BLUE",
        category: "하의",
    },
    {
        id: "5",
        imageUrl:
            "http://fr8ight.co.kr/web/product/extra/small/20200302/24283e10e81b2521cd70b49eb1864920.jpg",
        title: "FOUL WEATHER PARKA / BLACK NYLON WASHER",
        category: "아우터",
    },
    {
        id: "6",
        imageUrl:
            "http://fr8ight.co.kr/web/product/small/20191217/6aee5b5d88c43b952887310bffc2740f.jpg",
        title: "ARNEL SPECIAL EDITION / BLACK",
        category: "기타",
    },
];
const Category = ({ navigation }) => {
    const renderItem = ({ item }) => {
        return (
            <View>
                <ItemCard {...item} navigation={navigation} />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
    },
});

export default Category;
