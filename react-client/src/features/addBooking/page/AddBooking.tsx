import React, { useEffect, useState } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';
import CustomInput from '../../../components/CustomInput';
import FormItemContainer from '../../../components/FormItemContainer'
import useForm from '../../../hooks/useForm';
import { styles } from '../../../theme/theme';
import { useSelector } from 'react-redux';
import { selectColors } from '../../../theme/themeSlice';
import DropDownPicker from 'react-native-dropdown-picker';
import { fetchTours } from '../api/ToursApi';
import { AddBooking as addB } from '../api/BookingAPi';

export interface toursI{
  _id: String,
  name: string,
  price: Number,
  ndays: Number,
  userId: string,
}

function AddBooking() {
  const colors = useSelector(selectColors);

  const [open, setOpen] = useState(false);
  const [tour, setTour] = useState(null);
  const [tours, setTours] = useState<any>([])

  const [customer, handleChange] = useForm({
    name:'',
    phone:'',
    direction: '',
    ntravelers: '1',
    startdate: new Date(),
    extra: '',
    userId:'',
  });

  useEffect(() => {
    updateTours()
  }, [])

  const updateTours = () => {
    fetchTours(setTours)
  }

  const onSubmit = async () => {
    const bookingInfo = {
      contact: {name: customer.name, phone: customer.phone},
      address: customer.direction,
      state: 'Pending',
      startdate: customer.startdate,
      extra: customer.extra,
      ntravelers: customer.ntravelers,
      tours:[{name: '', _id: tour}]
    }
    
    const b_added = await addB(bookingInfo)
  }

  return (
    <>
      <Text style={{margin: 5}}>Tour</Text>
      <DropDownPicker
        stickyHeader={true}
        style={{
          width:'100%', 
          backgroundColor: colors.border,
          padding: 10,
          borderRadius: 10,
        }}
        searchable
        min={1}
        theme='DARK'
        language="ES"
        open={open}
        value={tour}
        items={tours}
        setOpen={setOpen}
        setValue={setTour}
        setItems={setTours}
        mode="BADGE"
      />
      <ScrollView>
        <FormItemContainer
          name={'Nombres*'}
          iconName={'person'}
        >
          <CustomInput
            value={customer.name}
            placeholder={'Nombres'}
            handleInputChange={
              (val) => handleChange({k:'name', v:val})
            }
          />
        </FormItemContainer>

        <FormItemContainer
          name={'Nro. Telefono'}
          iconName={'call'}
        >
          <CustomInput
            value={customer.phone}
            placeholder={'Telefono'}
            keyboardtype={'phone-pad'}
            handleInputChange={
              (val) => handleChange({k:'phone', v:val})
            }
          />
        </FormItemContainer>

        <FormItemContainer
          name={'Lugar de inicio*'}
          iconName={'home'}
        >
          <CustomInput
            value={customer.direction}
            placeholder={'Direccion'}
            handleInputChange={
              (val) => handleChange({k:'direction', v:val})
            }
          />
        </FormItemContainer>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <View
            style={{width: '30%', marginVertical: 10}}
          >
            <Text style={{margin: 5}}> N. viajantes</Text>
            <View style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center', 
              backgroundColor: colors.border,
              borderRadius: 10
            }}>
              <Icon
              name={'people'} 
              style={{
                ...styles.input, 
                borderBottomWidth: 0,
                marginRight: 10
              }} 
              color={colors.secondary} 
              size={30} />
              <TextInput
                style={{...styles.input, width: '30%', fontSize: 16,
                paddingVertical: 0,
                textAlign: 'center',
                marginStart: 15
              }}
                multiline={true}
                keyboardType={'numeric'}
                value={customer.ntravelers}
                defaultValue={'1'}
                onChangeText={(val) => handleChange({k:'ntravelers', v:val})}
              />
            </View>
          </View>
          <FormItemContainer
            name={'Fecha de tour'}
            iconName={'calendar'}
          >

              <CustomDateTimePicker
                date={customer.startdate}
                setDate={(newDate) => handleChange({k:'startdate', v:newDate})}
              />
          </FormItemContainer>
        </View>

        <View
          style={{width: '100%', marginVertical: 5}}
        >
          <Text style={{margin: 5}}> Informacion extra</Text>
          <View style={{
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start', 
            backgroundColor: colors.border,
            borderRadius: 10
          }}>
            <Icon
              name={'text'} 
              style={{
                ...styles.input, 
                borderBottomWidth: 0,
                marginRight: 10
              }} 
              color={colors.secondary} 
              size={30} />
            <TextInput
                style={{
                  ...styles.input,
                  width:'85%',
                  textAlignVertical: 'top',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  paddingVertical: 10
                }}
                multiline={true}
                numberOfLines={2}
                value={customer.extra}
                defaultValue={'1'}
                placeholder={'¿Hora de inicio? ¿Turno?'}
                onChangeText={(val) => handleChange({k:'extra', v:val})}
              />
          </View>
        </View>
        <View
          style={{justifyContent:'center', alignItems: 'center'}}
        >
          <TouchableOpacity
            style={{
              marginTop: 15,
              borderRadius: 5,
              backgroundColor: colors.secondary,
              paddingVertical: 15,
              width:300,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onSubmit}
          >
            <Text
              style={{fontSize: 18, color:'#fff'}}
            >
              GUARDAR
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            marginEnd: 15,
            alignItems: 'flex-end',
          }}
          onPress={()=>{}}
        >
          <Text
            style={{
              ...styles.input,
              fontSize: 14, 
              color:'#fff',
            }}
          >
            Agregar mas info...
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default AddBooking