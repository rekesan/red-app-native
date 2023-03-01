import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  const names = [
    "Nikolai",
    "Mika",
    "Bernadeth",
    "Carlo",
    "Carl",
    "Edmond",
    "Edwin",
    "Jayson",
    "Jean",
    "Marvin",
    "Patricia",
    "Red",
  ];

  const [name, setName] = useState("A name will appear here.");

  const handleButton = () => {
    do {
      newName = findNewName();
    } while (newName === name);
    setName(newName);
  };

  const findNewName = () => {
    return names[Math.floor(Math.random() * names.length)];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Pressable onPress={() => handleButton()} style={styles.pressable}>
        <Text style={styles.buttonText}>Click Me!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8b8b8",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    textAlign: "center",
  },
  pressable: {
    width: 200,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 2,
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
