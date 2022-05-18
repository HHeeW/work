import React, { Component } from 'react'
import { Button } from 'reactstrap'
import Swal from 'sweetalert2'


export default class Sweetalertbasic extends Component {

    viewALert = (flag, positionflag, e)=>{
        Swal.fire({
            position: positionflag,
            icon: 'success',
            title: flag+ '됐습니다.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    confirmAlert = (e)=>{
        Swal.fire({
            title: '정말 삭제하겠습니까?',
            continue: 'question',
            showConfirmButton: true,
            cancelButtonColor: '#01df01',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((rs)=>{
            if(re.value){
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Delete',
                    'sweetalert2 삭제완료',
                    'success'

                )
            }
        })
    }

    // componentDidMount(){
    //     Swal.fire('1.SweetAlert');
    //     alert('2.alert');
    //     Swal.fire('1. SweetAlert').then((result)=>{
    //         alert('2.result.value:' + result.value)
    //     })
    // }
  render() {
    return (
        <div style={{textALign:'center'}}>
            <div id="deleteId">alert 버튼 누르기</div>
            <button onClick={e=>confirmAlert()} color='danger'>삭제</button>
            <Button color='primary' style={{marginRight:'20px'}} onClick={e=>this.viewALert('저장', 'center')}>버튼1</Button>
            <Button color='info' onClick={e=>this.viewALert('수정', 'bottom-end')}>버튼2</Button>
        </div>
    )
  }
}
