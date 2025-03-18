import { View } from "react-native";
import SettingItems from "./SettingItems";
import { data1 } from "./data";

export function Settings() {
  return (
    <View>
      {data1.map((item) => (
        <SettingItems
          key={item.id}
          logo={item.logo}
          title={item.title}
          next={item.next}
        />
      ))}
    </View>
  );
}
