import { StyleSheet, Text, View } from "react-native"
import { format } from 'date-fns'
import { TourInterface } from "../../../ts/interfaces"
import { useAppSelector } from "../../../app/hooks"
import { selectColors } from "../../../theme"
import { useEffect, useState } from "react"
import { get } from "../../../api/api"

interface Props {
  date: Date,
  tour_id: String
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const ItemInfo = ({date, tour_id}: Props) => {
  const colors = useAppSelector(selectColors);
  const [tour, setTour] = useState<TourInterface | undefined>(undefined)

  useEffect(()=>{
    getTour()
  }, [])

  const getTour = async () => {
    const _tour = await get('tours', tour_id)
    setTour(_tour)
  }

  return (
    <View style={customStyles.container}>
      <Text style={{color: colors.text}}>
        {`${format(new Date(date), 'EEEE d')}`} - {tour&&tour.name}
      </Text>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container: {}
})
