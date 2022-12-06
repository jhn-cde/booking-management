import { StyleSheet, Text, View } from "react-native"
import { format } from 'date-fns'
import { styles } from "../../../theme/theme"

interface Props {
  date: Date,
  tours: String[]
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const ItemInfo = ({date, tours}: Props) => {
  return (
    <View style={customStyles.container}>
      <Text style={styles.text}>
        {`${format(new Date(date), 'EEEE d')}`} - {
          tours.map((tour, index) => 
            <Text key={index}>
              {index!==0&&', '}{tour}
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