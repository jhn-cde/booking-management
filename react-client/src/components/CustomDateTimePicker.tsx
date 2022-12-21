import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/theme';

interface Props{
  date: Date,
  setDate: (newDate: Date) => void
};

const CustomDateTimePicker = ({date, setDate}:Props) => {
  const [show, setShow] = useState(false);

  const onChange = (event: DateTimePickerEvent, date: Date | undefined) => {
    if(date){
      const currentDate = date;
      setShow(false);
      setDate(currentDate);
    }
  };

  return (
    <TouchableOpacity
      onPress={()=>setShow(!show)}
      style={{...styles.input, width: '80%'}}
    >
      <Text style={{...styles.input, borderBottomWidth: 0, width: '100%'}}>
        {date.toLocaleDateString('es-PE')}
      </Text>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  )
}

export default CustomDateTimePicker