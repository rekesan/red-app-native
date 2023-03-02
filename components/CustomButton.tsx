import { GestureResponderEvent, Pressable, StyleProp, Text, TextStyle } from "react-native";

export const CustomButton = ({ label, style, onPress }: CustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={style.button}>
      <Text style={style.text}>{label}</Text>
    </Pressable>
  );
};

interface CustomButtonProps {
  label: string;
  style?: null | StyleProp<TextStyle> | any;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
}
