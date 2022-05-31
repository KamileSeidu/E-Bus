import { StyleSheet, Text, View, Button, Platform, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'


export default function Calender() {
    const [date, setDate] = useState (new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty ');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Data(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1) + '/' + tempDate.getFullYear();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes: ' + tempDate.getMinutes();
        setText(fDate + '\n' + fTime)


        console.log(fDate + '(' + fTime + ')')

    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

  return (
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 25}}>{text}</Text>
      <View style={{margin:20}}>
        {/* <Button title='DatePicker' style = {{color:'red'}} onPress={() => showMode('date')} /> */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'orange' }]}
           onPress={() => showMode('date')}
          >
          <Text style={styles.text}>Select Date</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={{margin:20}}>
        <Button title='TimePicker' onPress={() => showMode('time')} />
      </View> */}
    

    {show && (
      <DateTimePicker
      testID='dateTimePicker'
      value={date}
      mode={mode}
      is24Hour={true}
      display='default'
      onChange={onChange}
      />)}


</View>


  )
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: 'dodgerblue',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 320,
    marginVertical: 10,
    // marginLeft: 75,
  
  },
  text: {
    color: 'black',
    fontSize: 18,
    textTransform: "uppercase",
    // fontWeight: "bold",
  },

  // container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // }
})