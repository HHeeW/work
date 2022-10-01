import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { format } from 'date-fns'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const EndTimePicker = ({ insertData, setInsertData }) => {
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
    const edate = format(selectedDate, 'yyy-MM-dd HH: mm');
    setVisible(false);
    setStDate(selectedDate)
    setInsertData({
      ...insertData,
        edate
    })
  }
  const onCancel = () => {
    setVisible(false);
  }

  return (
    <>
      <View style={styles.container}>
        {/* 버튼모양1 */}
        {/* <TouchableOpacity style={styles.end} onPress={onPressDate}>
          <Text style={styles.endText}>
            종료 날짜 선택
          </Text>
        </TouchableOpacity>
          <Text style={{color: '#000', fontSize: 16}}>
            { format(stDate, 'yyyy-MM-dd HH:mm') }
          </Text> */}
          {/* 버튼모양2 */}
        <TouchableOpacity style={styles.end} onPress={onPressDate}>
          {dselect ?
            <Text style={styles.endText}>
              { format(stDate, 'yyyy-MM-dd') }
            </Text>
            :
            <Text style={styles.endText}>
              종료 날짜
            </Text>
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.end} onPress={onPressTime}>
          {tselect ?
            <Text style={styles.endText}>
              { format(stDate, 'HH:mm') }
            </Text>
            :
            <Text style={styles.endText}>
              종료 시간
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
  
export default EndTimePicker
  
const styles = StyleSheet.create({
  container:{
      flex:1,
    // flexDirection:'column',    /**버튼1 */
    flexDirection: 'row',   /**버튼2 */
    justifyContent:'space-evenly',
    alignItems:'center',
    marginRight:15
  },
  end:{
    // paddingHorizontal:50,  /**버튼1 */
    paddingHorizontal:20, /**버튼2 */
    paddingVertical: 5,
      backgroundColor:'#ff5555',
      borderRadius: 20,
    },
    endText:{
      fontSize:18,
      color:'#fff'
    }
})