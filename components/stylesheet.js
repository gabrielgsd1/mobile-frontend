import { StyleSheet, Text, View } from "react-native";

export const style = StyleSheet.create({
  centered: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#222",
    fontWeight: "700",
    padding: 5,
    borderRadius: 3,
    width: "100%",
    textAlign: "center",
    marginTop: 8,
    color: "white",
  },
  input: {
    padding: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 6,
    marginBottom: 7,
  },
});
