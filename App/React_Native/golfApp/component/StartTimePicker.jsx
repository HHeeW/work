import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { format } from 'date-fns'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const StartTimePicker = () => {
  const [stDate, setStDate] = useState(new Date());
  const [ mode, setMode ] = useState('date');
  const [ visible, setVisible ] = useState(false);
  
  const [ dselect, setDselect ] = useState(false);
  const [ tselect, setTselect ] = useState(false);

  const onPressDate = () => {
    setMode('datetime');
    setVisible(true);
    // setDselect(true)
  }
  const onPressTime = () => {
    setMode('time');
    setVisible(true)
    // setTselect(true)
  }

  const onConfirm = (selectedDate) => {
    setVisible(false);
    setStDate(selectedDate)
  }
  const onCancle = () => {
    setVisible(false);
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.start} onPress={onPressDate}>
          <Text style={styles.startText}>
            시작 날짜 선택
          </Text>
        </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 16}}>
            { format(stDate, 'yyyy-MM-dd HH:mm') }
          </Text>
          {/* <TouchableOpacity style={styles.start} onPress={onPressDate}>
            {dselect ?
              <Text style={styles.startText}>
                { format(stDate, 'yyyy-MM-dd') }
              </Text>
              :
              <Text style={styles.startText}>
                시작 날짜 선택
              </Text>
            }
          </TouchableOpacity>
          <TouchableOpacity style={styles.start} onPress={onPressTime}>
            {tselect ?
              <Text style={styles.startText}>
                { format(stDate, 'HH:mm') }
              </Text>
              :
              <Text style={styles.startText}>
                시작 시간 선택
              </Text>
            }
          </TouchableOpacity> */}
      </View>
      <DateTimePickerModal
          isVisible={ visible }
          mode={ mode }
          onConfirm={ onConfirm }
          onCancle={ onCancle }
          date={ stDate }
      />
    </>
  )
}

export default StartTimePicker

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  start:{
    paddingHorizontal:50,
    paddingVertical: 5,
    backgroundColor:'#0c751e',
    borderRadius: 20,
  },
  startText:{
    fontSize:18,
    color:'#fff'
  }
})