import { getData, storeData } from "@/utils/storage"; // ✅ import storeData
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import TodoItem from "./components/week9/Todoitem";

export default function TodoList() {
  const navigation = useNavigation();
  const [todos, setTodos] = useState<any>([
    // { id: '1', completed: false, title: "exercise @ 7.00" },
    // { id: '2', completed: false, title: "meeting @ 9.00" },
    // { id: '3', completed: false, title: "go to cinema @ 19.00" },
  ]);

  console.log("TODOS:", todos);

  const onLoad = async () => {
    let data = await getData("todos");
    if (data) {
      setTodos(data); // โหลดข้อมูลจาก storage
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const onCreate = () => {
    let new_data = {
      id: "_" + Math.random().toString(36).substr(2, 9),
      title: "",
      completed: false,
    };
    let t = [...todos, new_data];
    setTodos(t);
    storeData("todos", t); // บันทึกข้อมูลใหม่
  };

  const onUpdate = (new_title: string, id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    t[index].title = new_title;
    setTodos(t);
    storeData("todos", t); // บันทึกหลังแก้ไข
  };

  const onCheck = (id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    t[index].completed = !t[index].completed;
    setTodos(t);
    storeData("todos", t); // บันทึกสถานะ check
  };

  const onDelete = (id: string) => {
    let t = [...todos];
    let index = t.findIndex((item) => item.id == id);
    let [removed_t] = t.splice(index, 1);
    console.log(removed_t);
    setTodos(t);
    storeData("todos", t); // บันทึกหลังลบ
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginTop: 15 }}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onUpdate={onUpdate}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        )}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          width: 50,
          height: 50,
          alignItems: "center",
          alignContent: "center",
          borderRadius: 25,
          position: "absolute",
          right: 10,
          bottom: 10,
        }}
        onPress={onCreate}
      >
        <FontAwesome name="plus" size={26} />
      </TouchableOpacity>
    </View>
  );
}