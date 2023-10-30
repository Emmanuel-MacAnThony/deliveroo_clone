import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useMemo, forwardRef, useCallback } from "react";
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: Colors.lightGrey,
        borderRadius: 0,
      }}
      handleIndicatorStyle={{
        display: "none",
      }}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={styles.toggleActive}
            onPress={() => dismiss()}
          >
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleInactive}
            onPress={() => dismiss()}
          >
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subheader}>Your Location</Text>
      <Link href={"/(modal)/location-search"} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Ionicons name="location-outline" size={20} color={Colors.medium} />
            <Text style={{ flex: 1 }}>Current location</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>
      </Link>
      <Text style={styles.subheader}>Arrival time</Text>
      <TouchableOpacity>
        <View style={styles.item}>
          <Ionicons name="stopwatch-outline" size={20} color={Colors.medium} />
          <Text style={{ flex: 1 }}>Now</Text>
          <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  activeText: {
    color: "white",
    fontWeight: "700",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 4,
    margin: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
  },
  inactiveText: {
    color: Colors.primary,
    //fontWeight: "700",
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderColor: Colors.grey,
    borderWidth: 1,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    width: 100,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    width: 100,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
});
