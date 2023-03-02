import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { names, animals } from "./data";
import { CustomButton } from "./components/CustomButton";

export default function App() {
  const [animal, setAnimal] = useState("[animal]");
  const [name, setName] = useState("[name]");

  const handleButton = () => {
    let newAnimal = getNewItem(animals, animal);
    let newName = getNewItem(names, name);

    setName(newName);
    setAnimal(newAnimal);
  };

  const getNewItem = (data, currItem) => {
    let newItem;

    do {
      newItem = data[Math.floor(Math.random() * data.length)];
    } while (newItem === currItem);

    return newItem;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{animal}</Text>
      <Text style={styles.text}>{name}</Text>
      <CustomButton
        label="CLICK ME!"
        onPress={handleButton}
        style={buttonStyle}
      />
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
    height: 75,
    width: "80%",
    fontWeight: 'bold',
    color: '#b8b8b8'
  },
});

const buttonStyle = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
