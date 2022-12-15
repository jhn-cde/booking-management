import { StyleSheet, Text, View } from "react-native"
import { format } from 'date-fns'
import { styles } from "../../../theme/theme"
import { Tour } from "../../../ts/interfaces/tour.interface"
import { useAppSelector } from "../../../app/hooks"
import { selectColors } from "../../../theme/themeSlice"

interface Props {
  date: Date,
  tours: Tour[]
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const ItemInfo = ({date, tours}: Props) => {
  const colors = useAppSelector(selectColors);
  
  return (
    <View style={customStyles.container}>
      <Text style={{...styles.text, color: colors.text}}>
        {`${format(new Date(date), 'EEEE d')}`} - {
          tours.map((tour, index) => 
            <Text key={index}>
              {index!==0&&', '}{tour.name}
            </Text>
          )
        }
      </Text>
    </View>
  )
}

const customStyles = StyleSheet.create({
  container: {}
})


export default ItemInfo