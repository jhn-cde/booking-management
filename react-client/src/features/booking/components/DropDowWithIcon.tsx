import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import DropDownPicker from "react-native-dropdown-picker";
import { get, getall } from "../../../api/api";
import { TourInterface } from "../../../ts/interfaces";

interface Props{
  tour: TourInterface,
  setTour: any,
  name: string
}

export const DropDownWithIcon = ({name, tour, setTour} : Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);
  const [tours, setTours] = useState<any>([])


  useEffect(() => {
    updateTours()
    setSelected(tour._id)
  }, [])

  const updateTours = async() => {
    const _tours = await getall('tours')
    const data = _tours.map((_tour: any) => {return {label: _tour.name, value: _tour._id}})
    
    setTours(data)
  }

  const setValue = async(value: any) => {
    if(value){
      const _tour = await get('tours', value)
      setTour(_tour)
    }
  }


  return (
    <View style={{...styles.container}}>
        <Text>{name}: </Text>
        {isEditing ? (
          <View style={{...styles.textInput}}>
            <DropDownPicker
              stickyHeader={true}
              style={{ 
                padding: 10,
                borderRadius: 10
              }}
              placeholder={'Selecciona un tour'}
              searchable
              min={1}
              language="ES"
              open={open}
              value={selected}
              items={tours}
              setOpen={setOpen}
              setValue={setSelected}
              onChangeValue={(val) => setValue(val)}
              setItems={setTours}
              mode="BADGE" 
            />
          </View>
        ) : (
          <Text style={styles.text}>{tour.name}</Text>
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
    maxWidth: 200
  },
  text: {
    padding: 5,
    paddingHorizontal: 10,
  },
});