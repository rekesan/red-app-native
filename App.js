import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// import useSound from "react-native-use-sound";

export default function App() {

  // const [play, stop] = useSound(flop);
 
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

  const animals = [
    '🐵',
    '🐶',
    '🐺',
    '🦁',
    '🐯',
    '🦊',
    '🦝',
    '🐮',
    '🐷',
    '🐗',
    '🐭',
    '🐹',
    '🐰',
    '🐻',
    '🐻‍❄️',
    '🐨',
    '🐼',
    '🐲',
    '🐔',
    '🦄',
    '🐴',
    '🦓',
    '🐸',
  ]

  const [name, setName] = useState("<No Name>");

  const handleButton = () => {
    let newName;
    do {
      newName = findNewName();
    } while (newName === name);
    newName = `${animals[Math.floor(Math.random() * animals.length)]}\n${newName}`;
    setName(newName);
    // play();
  };

  const findNewName = () => {
    return names[Math.floor(Math.random() * names.length)];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Pressable onPress={() => handleButton()} style={styles.pressable}>
        <Text style={styles.buttonText}>CLICK ME!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
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
