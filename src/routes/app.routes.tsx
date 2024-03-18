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
  exercise: undefined;
  history: undefined;
  profile: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const {colors} = useTheme()
  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false , 
        
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200]
        
        }}>
     
      <Screen name="home" component={Home} options={{
        tabBarIcon: ({color}) => <HomeLogo fill={color} width={32} height={32} />,
      }} />

      <Screen name="history" component={History} options={{
        tabBarIcon: ({color}) => <HistoryLogo fill={color} width={32} height={32} />,
      }} />
      <Screen name="profile" component={Profile} options={{
        tabBarIcon: ({color}) => <ProfileLogo fill={color} width={32} height={32} />,
      }} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  )
}