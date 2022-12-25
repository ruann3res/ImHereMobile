import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input:{
    flex: 1,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    height: 56,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 10,
  },
  button:{
    backgroundColor: "#31CF67", 
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
  form:{
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 48,
  },
  listEmptyText:{
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  }
});
