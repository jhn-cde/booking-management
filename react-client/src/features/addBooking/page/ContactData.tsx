import React from 'react'
import PageContainer from '../../../components/PageContainer'
import { AddBookingScreenProps } from '../navigator/types'
import CustomerForm from '../components/CustomerForm'
import { CustomerInterface } from '../../../ts/interfaces/customer.interface'

const ContactData = ({navigation}: AddBookingScreenProps<'Contact'>) => {
  const onSubmit = (customer: CustomerInterface) => {
    navigation.navigate('Tours')
  }

  return (
    <PageContainer>
      <CustomerForm onSubmit={onSubmit}/>
    </PageContainer>
  )
}

export default ContactData