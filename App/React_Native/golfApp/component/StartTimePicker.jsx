import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { format } from 'date-fns'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const StartTimePicker = ({ insertData, setInsertData }) => {
  const [stDate, setStDate] = useState(new Date());
  const [ mode, setMode ] = useState('date');
  const [ visible, setVisible ] = useState(false);
  
  const [ dselect, setDselect ] = useState(false);
  const [ tselect, setTselect ] = useState(false);

  const onPressDate = () => {
    // setMode('datetime');
    setMode('date');
    setVisible(true);
    setDselect(true)
  }
  const onPressTime = () => {
    setMode('time');
    setVisible(true)
    setTselect(true)
  }

  const onConfirm = (selectedDate) => {
    const sdate = format(selectedDate, 'yyyy-MM-dd HH: mm');
    setVisible(false);
    setStDate(selectedDate)
    setInsertData({
      ...insertData,
      sdate
    })
  }
  const onCancel = () => {
    setVisible(false);
  }

  return (
    <>
      <View style={styles.container}>
        {/* 버튼모양1 */}
        {/* <TouchableOpacity style={styles.start} onPress={onPressDate}>
          <Text style={styles.startText}>
            시작 날짜 선택
          </Text>
        </TouchableOpacity>
        <Text style={{color: '#000', fontSize: 16}}>
          { format(stDate, 'yyyy-MM-dd HH:mm') }
        </Text> */}

        {/* 버튼모양2 */}
        <TouchableOpacity style={styles.start} onPress={onPressDate}>
          {dselect ?
            <Text style={styles.startText}>
              { format(stDate, 'yyyy-MM-dd') }
            </Text>
            :
            <Text style={styles.startText}>
              시작 날짜
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
              시작 시간
            </Text>
          }
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
          isVisible={ visible }
          mode={ mode }
          onConfirm={ onConfirm }
          onCancel={ onCancel }
          date={ stDate }
      />
    </>
  )
}

export default StartTimePicker

const styles = StyleSheet.create({
  container:{
    flex:1,
    // flexDirection:'column',  /**버튼 모양 1 */
    flexDirection: 'row',      /**버튼 모양 2 */
    justifyContent:'space-evenly',
    alignItems:'center',
    marginRight:15
  },
  start:{
    // paddingHorizontal:50,  /**버튼 모양 1 */
    paddingHorizontal:20,    /**버튼 모양 2 */
    paddingVertical: 5,
    backgroundColor:'#0c751e',
    borderRadius: 20,
  },
  startText:{
    fontSize:18,
    color:'#fff'
  }
})