import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Categories from "../components/Categories";
import Restaurants from "../components/Restaurants";
import Colors from "../constants/Colors";

const { height } = Dimensions.get("screen");

const Page = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        <Categories />
        <Text style={styles.header}>Top picks in your neighborhood</Text>
        <Restaurants />
        <Categories />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    top: 120,
    backgroundColor: Colors.lightGrey,
    height: height - 200,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 8,
    paddingHorizontal: 16,
  },
});
