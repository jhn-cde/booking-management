import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux'
import { CustomInput, FormItemContainer, CustomDateTimePicker} from '../../../components/'
import useForm from '../../../hooks/useForm'
import { styles, selectColors } from '../../../theme'
import data from '../../../assets/countries.json'
import { CustomerInterface } from '../../../ts/interfaces/customer.interface'
import DropDownPicker from 'react-native-dropdown-picker';

interface Props{
  onSubmit: (customer: CustomerInterface) => void,
  simple?: boolean
};

export const CustomerForm = ({onSubmit, simple=false}: Props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data.countries.map(option => {return {label: option, value: option}}))
  const colors = useSelector(selectColors);
  const [showAll, setShowAll] = useState(false);
  const [customer, handleChange] = useForm({
    name:'',
    ndoc:'',
    email:'',
    phone:'',
    nationality: 'Peru',
    birthdate: new Date(),
    userId:''
  });

  return (
    <>
      <ScrollView
      >
        <FormItemContainer
          name={'Nombres*'}
          iconName={'person'}
        >
          <CustomInput
            value={customer.name}
            placeholder={'Nombres'}
            handleInputChange={(val) => handleChange({k:'name', v:val})}
          />
        </FormItemContainer>

        <FormItemContainer
          name={'N. doc*'}
          iconName={'clipboard'}
        >
          <CustomInput
            value={customer.ndoc}
            placeholder={'N. doc'}
            keyboardtype={'numeric'}
            handleInputChange={(val) => handleChange({k:'ndoc', v:val})}
          />
        </FormItemContainer>

        {!simple&&<FormItemContainer
          name={'Email'}
          iconName={'mail'}
        >
          <CustomInput
            value={customer.email}
            placeholder={'Email'}
            keyboardtype={'email-address'}
            handleInputChange={(val) => handleChange({k:'email', v:val})}
          />
        </FormItemContainer>}

        {!simple&&<FormItemContainer
          name={'Phone'}
          iconName={'call'}
        >
          <CustomInput
            value={customer.phone}
            placeholder={'Phone'}
            keyboardtype={'phone-pad'}
            handleInputChange={(val) => handleChange({k:'phone', v:val})}
          />
        </FormItemContainer>}

        {showAll&&
        <FormItemContainer
          name={'Fecha de nacimiento'}
          iconName={'calendar'}
        >
          <CustomDateTimePicker
            date={customer.birthdate}
            setDate={(newDate) => handleChange({k:'birthdate', v:newDate})}
          />
        </FormItemContainer>
        }
      </ScrollView>
        {showAll
          &&
          <>
            <Text style={{marginTop: 15, margin: 5}}>Pais</Text>
            <DropDownPicker
              stickyHeader={true}
              style={{
                width:'100%', 
                backgroundColor: colors.border,
                padding: 10,
                borderRadius: 10,
              }}
              searchable
              theme='DARK'
              language="ES"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              mode="BADGE"
            />
          </>
        }
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingVertical: 5
          }}
          onPress={()=>setShowAll(!showAll)}
        >
          {showAll
          ?<Text style={{color: colors.text}}>
            <Icon
              name={'caret-up-outline'} 
              style={{
                ...styles.input, 
                borderBottomWidth: 0
              }}
              size={30}
            /> Ver menos
          </Text>
          :<Text style={{color: colors.text}}>
            <Icon
              name={'caret-down-outline'} 
              style={{
                ...styles.input, 
                borderBottomWidth: 0
              }}
              size={30}
            /> Ver más
          </Text>}
        </TouchableOpacity>
        <View 
          style={{
            flexDirection:'column', justifyContent:'center', 
            alignItems: 'flex-end',
            height: 100,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 6,
              backgroundColor: colors.secondary,
              paddingVertical: 10,
              paddingHorizontal: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={()=>onSubmit(customer)}
          >
            <Text
              style={{fontSize: 18, color:'#fff'}}
            >
              Siguiente
            </Text>
          </TouchableOpacity>
        </View>
    </>
  )
}
