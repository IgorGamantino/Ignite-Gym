import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

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
  return (
    <Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Screen name="home" component={Home} options={{
        tabBarIcon: () => <HomeLogo width={32} height={32} />,
      }} />

      <Screen name="history" component={History} options={{
        tabBarIcon: () => <HistoryLogo width={32} height={32} />,
      }} />
      <Screen name="profile" component={Profile} options={{
        tabBarIcon: () => <ProfileLogo width={32} height={32} />,
      }} />
      <Screen name="exercise" component={Exercise} />
    </Navigator>
  )
}