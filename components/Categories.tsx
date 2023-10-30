import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { categories } from "../assets/data/home";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {categories?.map((category, index) => {
        return (
          <View style={styles.categoryCard} key={index.toString()}>
            <Image source={category.img} />
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.categoryText}>{category.text}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    marginEnd: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  categoryText: {
    padding: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});