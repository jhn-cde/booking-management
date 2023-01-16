import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { CustomDateTimePicker } from "../../../components";

interface Props{
  date: Date,
  setDate: (newDate: Date) => void,
  name: string
}

export const DateWithIcon = ({name, date, setDate} : Props) => {
  //const [text, setText] = useState(_text);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{name}: </Text>
      {isEditing ? (
        <View style={styles.textInput}>
          <CustomDateTimePicker
            date={date}
            setDate={setDate} 
          />
        </View>
      ) : (
        <Text style={styles.text}>{new Date(date).toLocaleDateString()}</Text>
      )}
      <TouchableOpacity style={styles.icon_container} onPress={() => setIsEditing(!isEditing)} >
        <Icon name="pencil-circle-outline" style={styles.icon}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_container:{
    justifyContent: 'flex-start',
    height: 30
  },
  icon: {
    fontSize: 20,
    paddingVertical: 4 
  },
  textInput: {
    paddingHorizontal: 10
  },
  text: {
    padding: 5,
    paddingHorizontal: 10,
  },
});