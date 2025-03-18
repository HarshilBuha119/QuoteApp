import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Images } from "./assets/images";
import HomeScreen from "./screens/HomeScreen";
import FactsScreen from "./screens/FactsScreen";
import CalenderScreen from "./screens/CalenderScreen";
import SearchScreen from "./screens/SearchScreen";
import SettingScreen from "./screens/SettingScreen";
import AboutScreen from "./components/About";
import ReminderScreen from "./components/Reminders";
import AppearanceScreen from "./components/Appearance";
import PasscodeScreen from "./components/Passcode";

const BottomTabs = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <>
      <BottomTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          headerShown: false,
          tabBarStyle: {
            height: 80,
          },
          tabBarIconStyle: {
            marginVertical: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12, 
            textAlign: "center",
          },
          tabBarIcon: ({ focused }) => {
            let iconSource;
            switch (route.name) {
              case "Home":
                iconSource = Images.Home;
                break;
              case "Facts":
                iconSource = Images.Facts;
                break;
              case "Calender":
                iconSource = Images.Calender;
                break;
              case "Search":
                iconSource = Images.Search;
                break;
              case "Setting":
                iconSource = Images.Setting;
                break;
              default:
                iconSource = Images.Home;
            }
            return (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "black" : "#555E5817",
                }}
                source={iconSource}
              />
            );
          },
        })}
      >
        <BottomTabs.Screen name="Home" component={HomeScreen} />
        <BottomTabs.Screen name="Facts" component={FactsScreen} />
        <BottomTabs.Screen name="Calender" component={CalenderScreen} />
        <BottomTabs.Screen name="Search" component={SearchScreen} />
        <BottomTabs.Screen name="Setting" component={SettingScreen} />
      </BottomTabs.Navigator>
    </>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign:"center",headerShadowVisible:false,headerTitleStyle:{
      fontSize:20,
      fontWeight:"700",
      fontFamily:"DM Sans"
    }}}>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen}  />
      <Stack.Screen name="Reminders" component={ReminderScreen}/>
      <Stack.Screen name="Appearance" component={AppearanceScreen}/>
      <Stack.Screen name="Passcode" component={PasscodeScreen}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    </>
  );
}
