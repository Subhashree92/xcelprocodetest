import React, { Component } from 'react';
import './table.css'

class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         students: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
      this.addRow=this.addRow.bind(this)
   }
   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age, email } = student //destructuring
       return (
          <tr key={id} draggable="true">
             <td draggable="true">{id}</td>
             <td draggable="true">{name}</td>
             <td draggable="true">{age}</td>
             <td draggable="true">{email}</td>
          </tr>
       )
    })
 }
 renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }
 addRow() {
   var rows = this.state.students
   rows.push('new row')
   this.setState({students: rows})
}
   render() { 
      return (
         <div>
            <h1>Things To Do</h1>
            <table id='students'>
               <tbody>
               <tr >{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            <button id="addBtn" onClick={this.addRow}>ADD</button>
            <h1>Done</h1>
         </div>
      )
   }
}

export default Table