import React from "react";
import { TextInput, View } from "react-native";
import MyIcon from "./MyIcon";


export default function Section5() {
  return (
    <View style={{ margin : 10 , padding : 10, borderWidth : 1, borderColor : 'gray', borderRadius : 10 }}>
      {/* View ก้อนที่ 1 */}
      <View >
        <TextInput style={{ fontSize : 20 }} placeholder="What're you looking for?" />
      </View>
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="Wifi" name="wifi" size={30} color="#3399CC" />
        <MyIcon title="coffee" name="coffee" size={30} color="#3399CC" />
        <MyIcon title="bath" name="bath" size={30} color="#3399CC" />
        <MyIcon title="car" name="car" size={30} color="#3399CC" />
        <MyIcon title="paw" name="paw" size={30} color="#3399CC" />
      </View>
      
      
    </View>
  );
}
