import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { restaurants } from "../assets/data/home";
import { Link } from "expo-router";
import Colors from "../constants/Colors";

const Restaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 15,
      }}
    >
      {restaurants?.map((restaurant, index) => {
        return (
          <Link href={"/details"} asChild key={index.toString()}>
            <TouchableOpacity>
              <View style={styles.restaurantCard}>
                <Image source={restaurant.img} style={styles.image} />
                <View style={styles.categoryBox}>
                  <Text style={styles.categoryText}>{restaurant.name}</Text>
                  <Text style={{ color: Colors.green }}>
                    {restaurant.rating} {restaurant.ratings}
                  </Text>
                  <Text style={{ color: Colors.medium }}>
                    {restaurant.distance}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </Link>
        );
      })}
    </ScrollView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  categoryBox: {
    flex: 2,
    padding: 10,
  },

  categoryText: {
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: "bold",
  },

  image: {
    flex: 5,
    width: undefined,
    resizeMode: "cover",
    height: undefined,
  },
  restaurantCard: {
    width: 300,
    height: 250,
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
    overflow: "hidden",
  },
});
