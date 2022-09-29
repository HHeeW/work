import { openDatabase } from 'react-native-sqlite-storage'

export const db = openDatabase(
    {
        name:'golfcourse.db',
        localStorage:'default',
        createFromLocation: '~www/golfcourse.db'
    },
    (DB)=>{
        console.log('접속성공')
    },
    (error)=>{
        console.log('에러', error.message);
    }
  )
