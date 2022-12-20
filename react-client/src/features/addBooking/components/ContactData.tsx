import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import FormItemContainer from '../../../components/FormItemContainer'
import useForm from '../../../hooks/useForm'
import { styles } from '../../../theme/theme'
import { selectColors } from '../../../theme/themeSlice';
import { useSelector } from 'react-redux';
import CustomInput from '../../../components/CustomInput'

const ContactData = () => {
  const colors = useSelector(selectColors);
  const [contact, handleChange] = useForm({
    name:'',
    ndoc:''
  })

  return (
    <View style={{flex:1}}>
      <Text
        style={styles.subtitle}
      >
        Datos de contacto
      </Text>

      <View>
        <FormItemContainer
          name={'Nombres*'}
        >
          <CustomInput
            value={contact.name}
            iconName={'person'}
            placeholder={'Nombres'}
            handleInputChange={(val) => handleChange({k:'name', v:val})}
          />
        </FormItemContainer>

        <FormItemContainer
          name={'N. doc*'}
        >
          <CustomInput
            value={contact.name}
            iconName={'clipboard'}
            placeholder={'N. doc'}
            handleInputChange={(val) => handleChange({k:'ndoc', v:val})}
          />
        </FormItemContainer>

        <FormItemContainer
          name={'Email'}
        >
          <CustomInput
            value={contact.name}
            iconName={'mail'}
            placeholder={'Email'}
            handleInputChange={(val) => handleChange({k:'email', v:val})}
          />
        </FormItemContainer>

        <FormItemContainer
          name={'Phone'}
        >
          <CustomInput
            value={contact.name}
            iconName={'call'}
            placeholder={'Phone'}
            handleInputChange={(val) => handleChange({k:'phone', v:val})}
          />
        </FormItemContainer>

        <FormItemContainer
          name={'Pais'}
        >
          <CustomInput
            value={contact.name}
            iconName={'locate'}
            placeholder={'Pais'}
            handleInputChange={(val) => handleChange({k:'nationality', v:val})}
          />
        </FormItemContainer>

        <FormItemContainer
          name={'Fecha de nacimiento'}
        >
          <CustomInput
            value={contact.name}
            iconName={'calendar'}
            placeholder={'Fecha de nacimiento'}
            handleInputChange={(val) => handleChange({k:'birthdate', v:val})}
          />
        </FormItemContainer>
      </View>

      <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems: 'center'}}>
        <TouchableOpacity
          style={{
            borderRadius: 6,
            backgroundColor: colors.secondary,
            paddingVertical: 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{fontSize: 20, color:'#fff'}}
          >
            Siguiente
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ContactData