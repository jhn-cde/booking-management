import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { TextInput } from 'react-native';
import { useAppSelector } from '../app/hooks';
import { styles } from '../theme/theme';
import { selectColors } from '../theme/themeSlice';

interface Props{
  options: string[],
  initialValue: string,
  changeValue: (newValue: String) => void
}

const MyPicker = ({options, initialValue, changeValue}: Props) => {
  const colors = useAppSelector(selectColors);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateValue = (selected: string) => {
    setSelectedValue(selected)
    changeValue(selected)
  }

  return (
    <>
      <TextInput
        style={{...styles.input, minWidth: 150}}
        placeholder="Search"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={updateValue}
        
        style={{minWidth: 120}}
        dropdownIconColor={colors.text}
        itemStyle={{color:colors.text}}
      >
        {filteredOptions.map(option => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
    </>
  );
};

export default MyPicker;