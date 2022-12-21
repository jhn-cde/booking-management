import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useAppSelector } from '../app/hooks';
import { styles } from '../theme/theme';
import { selectColors } from '../theme/themeSlice';
import CustomInput from './CustomInput';

interface Props{
  options: string[],
  selectedValue: string,
  setSelectedValue: (selected: String) => void
}

const MyPicker = ({options, selectedValue, setSelectedValue}: Props) => {
  const colors = useAppSelector(selectColors);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(options);

  const handleSearch = (text: string) => {
    setSearchTerm(text)
    const newData = options.filter((options) => options.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(newData);

    if(newData.length === 1){
      setSelectedValue(newData[0])
    }
  }

  return (
    <>
      <Picker
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}

        style={{flex: 2}}
        mode={'dropdown'}
        dropdownIconColor={colors.text}
        itemStyle={{color:colors.text}}
      >
        {filteredData.map(option => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>

      <CustomInput
        value={searchTerm}
        placeholder={'Buscar'}
        handleInputChange={handleSearch}
        pstyles={{flex: 1}}
      />
    </>
  );
};

export default MyPicker;