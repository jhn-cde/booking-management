import React from 'react'
import { PageContainer } from '../../../components'
import { AddBookingScreenProps } from '../navigator/types'
import { CustomerForm } from '../components'
import { CustomerInterface } from '../../../ts/interfaces/customer.interface'

export const ContactData = ({navigation}: AddBookingScreenProps<'Contact'>) => {
  const onSubmit = (customer: CustomerInterface) => {
    navigation.navigate('Tours')
  }

  return (
    <PageContainer>
      <CustomerForm onSubmit={onSubmit}/>
    </PageContainer>
  )
}
