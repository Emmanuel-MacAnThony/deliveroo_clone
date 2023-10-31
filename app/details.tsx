import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import ParallaxScrollView from "../components/ParallaxScrollView";
import Colors from "../constants/Colors";
import { restaurant } from "../assets/data/restaurant";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Details = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
      headerTintColor: Colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.roundButton}
        >
          <Ionicons name="arrow-back" size={24} color={Colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="share-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="search-outline" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <>
      <ParallaxScrollView
        style={{ flex: 1 }}
        backgroundColor="white"
        parallaxHeaderHeight={250}
        stickyHeaderHeight={120}
        contentBackgroundColor={Colors.lightGrey}
        renderBackground={() => {
          return (
            <Image
              source={restaurant.img}
              //style={{ width: "100%", height: 300 }}
            />
          );
        }}
        renderStickyHeader={() => {
          return (
            <View key="sticky-header" style={styles.stickySection}>
              <Text style={styles.stickySectionText}>{restaurant.name}</Text>
            </View>
          );
        }}
      >
        <View style={{ height: 700 }}>
          <View style={styles.detailsContainer}>
            <Text>Details</Text>
          </View>
        </View>
      </ParallaxScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },

  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  stickySection: {
    marginLeft: 70,
    height: 80,
    justifyContent: "flex-end",
  },

  stickySectionText: {
    fontSize: 20,
    margin: 10,
  },
});
