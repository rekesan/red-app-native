import { Pressable, Text } from "react-native";

export const CustomButton = (props: CustomButtonProps) => {
  return (
    <Pressable onPress={props.onPress} style={props.style.button}>
      <Text style={props.style.text}>{props.label}</Text>
    </Pressable>
  );
};

interface CustomButtonProps {
  label: string;
  style?: any;
  onPress?: any;
}
