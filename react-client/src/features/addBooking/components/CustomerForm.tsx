import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons';
import { useSelector } from 'react-redux'
import CustomInput from '../../../components/CustomInput'
import FormItemContainer from '../../../components/FormItemContainer'
import MyPicker from '../../../components/MyPicker'
import useForm from '../../../hooks/useForm'
import { styles } from '../../../theme/theme'
import { selectColors } from '../../../theme/themeSlice'
import data from '../../../assets/countries.json'
import { CustomerInterface } from '../../../ts/interfaces/customer.interface'
import CustomDateTimePicker from '../../../components/CustomDateTimePicker';

interface Props{
  onSubmit: (customer: CustomerInterface) => void,
  simple?: boolean
};

const CustomerForm = ({onSubmit, simple=false}: Props) => {
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

  const countries = data.countries;
  return (
    <>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps = 'always'
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
        <>
          <FormItemContainer
            name={'Pais'}
            iconName={'map'}
          >
            <MyPicker
              options={countries} 
              selectedValue={customer.nationality}
              setSelectedValue={(selected) => handleChange({k:'nationality', v:selected})}
            />
          </FormItemContainer>

          <FormItemContainer
            name={'Fecha de nacimiento'}
            iconName={'calendar'}
          >
            <CustomDateTimePicker
              date={customer.birthdate}
              setDate={(newDate) => handleChange({k:'birthdate', v:newDate})}
            />
          </FormItemContainer>
        </>
        }<TouchableOpacity
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
      </ScrollView>
    </>
  )
}

export default CustomerForm