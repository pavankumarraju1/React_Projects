import React from 'react'
import { Table } from 'react-bootstrap'
function Details() {
  const customStyle={
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
    marginTop:"5rem",
  }

  const tableStyle={
    height:"28rem",
    width:"40rem",
  }
  return (
    <div style={customStyle}>
      <Table responsive striped bordered hover variant='dark' style={tableStyle} >
        <thead>
          <tr>
            <th>fields</th>
            <th>details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Sangaraju.Pavan Kumar Raju</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>pavankumarraju1382002@gmail.com</td>
          </tr>
          <tr>
            <td>phone number</td>
            <td>6281627948</td>
          </tr>
          <tr>
            <td>Git Hub account</td>
            <td><a href='https://github.com/pavankumarraju1'>url click here</a></td>
          </tr>
          <tr>
            <td>Linked-In account</td>
            <td><a href='https://www.linkedin.com/in/sangaraju-pavan-kumar-raju-b2b038258/'>url click here</a></td>
          </tr>
          <tr>
            <td>Hobbies</td>
            <td>
              <p>playing cricket</p>
              <p>listening songs</p>
              <p>watching movies</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Details