import React, { lazy, useState, useEffect } from 'react'
import axios from 'axios'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'

const TestPage = () => {
  const [name, setName] = useState('no data received')
  const [code, setCode] = useState('no data received')

  function onButton() {
    axios.get('/endpoint').then(response => {
      console.log(response.data)
      setName(response.data.Name)
      setCode(response.data.Code)
    })

// Another way to make requests without axios
//    fetch("/endpoint")
//      .then(response => {
//        if (!response.ok) {
//          throw Error(response.statusText)
//        }
//        return response.json()
//      })
//      .then(data => {
//        console.log(data)
//        setName(data.Name)
//        setCode(data.Code)
//      })
//      .catch(error => console.error(error))

  }

  return (<div>
            <h2>Backend Testing:</h2>
            <CButton onClick={onButton}> Get Backend Data</CButton>
            <h5> Name: {name} </h5>
            <h5> Code: {code} </h5>

          </div>)

}

export default TestPage;
