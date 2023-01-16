import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

interface Props{
  text: string,
  setText: any,
  name: string
}

export const TextInputWithIcon = ({name, text, setText} : Props) => {
  //const [text, setText] = useState(_text);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{name}: </Text>
      {isEditing ? (
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={setText}
          selectTextOnFocus
          autoFocus
        />
      ) : (
        <Text style={styles.text}>{text}</Text>
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
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  text: {
    padding: 5,
    paddingHorizontal: 10,
  },
});