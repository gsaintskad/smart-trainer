import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Home Screen */}
      <Stack.Screen 
        name="index" 
        options={{ title: 'Home' }} 
      />
      {/* Tracker Screen */}
      <Stack.Screen 
        name="tracker" 
        options={{ title: 'Active Session' }} 
      />
      {/* Summary Screen */}
      <Stack.Screen 
        name="summary" 
        options={{ title: 'Session Summary', presentation: 'modal' }} 
      />
    </Stack>
  );
}