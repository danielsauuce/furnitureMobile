import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AuthScreen() {
  const insets = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-light-background dark:bg-dark-background"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="flex-grow px-5 pb-10"
        contentContainerStyle={{ paddingTop: insets.top + 40 }}
      >
        <View className="items-center mb-10">
          <Text className="text-[40px] font-bold tracking-[0.5px] text-light-primary">Olayinka</Text>
          <Text className="text-[13px] tracking-[2px] uppercase mt-1 text-light-secondary">
            Furniture Palace
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
