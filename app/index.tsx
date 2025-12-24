import "../global.css"
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-300">
      <Text className="text-xl font-bold text-red-900">
        Welcome to Daniel!
      </Text>
    </View>
  );
}