import { Platform } from "react-native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import HomeLogo from "@assets/home.svg"
import HistoryLogo from "@assets/history.svg"
import ProfileLogo from "@assets/profile.svg"

type AppRoutes = {
  home: undefined;
  exercise: {
    id: number
  };
  history: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const {sizes,colors} = useTheme()
  const iconSizes = sizes[6]
  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false , 
        
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: sizes[10],
          paddingTop: sizes[6]
        }
        
        }}>
     
      <Screen name="home" component={Home} options={{
        tabBarIcon: ({color}) => <HomeLogo fill={color} width={iconSizes} height={iconSizes} />,
      }} />

      <Screen name="history" component={History} options={{
        tabBarIcon: ({color}) => <HistoryLogo fill={color} width={iconSizes} height={iconSizes} />,
      }} />
      <Screen name="profile" component={Profile} options={{
        tabBarIcon: ({color}) => <ProfileLogo fill={color} width={iconSizes} height={iconSizes} />,
      }} />
      <Screen name="exercise" component={Exercise} options={{
        tabBarButton: () => null,
      }} />
    </Navigator>
  )
}