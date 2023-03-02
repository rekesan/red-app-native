import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { names, animals } from "./data";
import { CustomButton } from "./components/CustomButton";

export default function App() {
  const [name, setName] = useState("");

  const handleButton = () => {
    let newName;
    do {
      newName = findNewName();
    } while (newName === name);
    newName = `${
      animals[Math.floor(Math.random() * animals.length)]
    }\n${newName}`;
    setName(newName);
  };

  const findNewName = () => {
    return names[Math.floor(Math.random() * names.length)];
  };

  return (
    <View style={styles.container}>
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
    height: 150,
    width: '80%'
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
