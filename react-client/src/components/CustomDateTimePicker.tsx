import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props{
  date: Date,
  setDate: (newDate: Date) => void
};

export const CustomDateTimePicker = ({date, setDate}:Props) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('1')

  const onChange = (event: DateTimePickerEvent, date: Date | undefined) => {
    if(date){
      const currentDate = date;
      setShow(false);
      setDate(currentDate);
      setSelected('3')
    }
  };

  return (
    <View style={{
      width:'auto',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'}}
    >
      <TouchableOpacity
        onPress={()=>{
          setDate(new Date())
          setSelected('1')
        }}
        style={selected === '1'?customStyles.btnSelected:customStyles.btn}
      >
        <Text style={selected === '1'?customStyles.selected:customStyles.text}> Hoy </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>{
          let tomorrow = new Date()
          tomorrow.setDate(tomorrow.getDate()+1)
          setDate(tomorrow)
          setSelected('2')
        }}
        style={selected === '2'?customStyles.btnSelected:customStyles.btn}
      >
        <Text style={selected === '2'?customStyles.selected:customStyles.text}> Mañana </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        onPress={()=>setShow(!show)}
        style={selected === '3'?customStyles.btnSelected:customStyles.btn}
      >
        <Text style={selected === '3'?customStyles.selected:customStyles.text}> Otro día... </Text>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </TouchableOpacity>
    </View>
  )
}

const customStyles = StyleSheet.create({
  btn: {
    padding: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    marginEnd: 5
  },
  btnSelected:{
    padding: 5,
    borderRadius: 5,
    marginEnd: 5
  },
  text: {
    fontSize: 14
  },
  selected: {
    fontSize: 18,
    color: 'green'
  }
})
