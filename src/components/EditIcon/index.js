import React from "react";

import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// import { Container } from './styles';

const EditIcon = () => (
  <View style={styles.container}>
    <MaterialIcons
      name="edit"
      underlayColor="transparent"
      color="#ffffff"
      size={28}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333"
  }
});
export default EditIcon;
