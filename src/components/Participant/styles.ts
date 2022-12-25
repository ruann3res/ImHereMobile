import {StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width : "100%",
    backgroundColor: '#1F1E20',
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 13,
  },
  name:{
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,
  },
  button:{
    backgroundColor: "#e23c44", 
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",

  },
  textButton:{
    color: "#FFF",
    fontSize:24,
  },
})