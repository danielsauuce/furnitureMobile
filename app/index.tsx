import { Text, View, Image } from 'react-native';
import '../global.css';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Welcome() {
  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#8B5CF6', '#6366F1', '#3B82F6']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute inset-0"
      />
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-6 pt-5 pb-8 justify-between">
          <View className="rounded-[32px] overflow-hidden mt-5 h-96">
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
              }}
              className="w-full h-full"
            />

            <View className="absolute top-5 right-5">
              <View
                className="px-4 py-2 rounded-[20px]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 4,
                }}
              >
                <Text
                  className="text-xs font-bold text-[#6366F1]"
                  style={{ letterSpacing: 0.5 }}
                >
                  Premium Quality
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
