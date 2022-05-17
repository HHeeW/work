import React from 'react'
import { Card, CardBody, UncontrolledCollapse } from 'reactstrap'

const ReactStrapCollaps = () => {
  return (
    <div>
        <button color='danger' id='toggle'>
            펼치기 / 접기
        </button>
        <UncontrolledCollapse toggler='#toggle'>
            <Card>
                <CardBody>
                    이곳은 토글러 안 입니다.
                </CardBody>
            </Card>
        </UncontrolledCollapse>
    </div>
  )
}

export default ReactStrapCollaps