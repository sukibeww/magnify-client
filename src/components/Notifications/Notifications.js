import React, { useContext } from 'react'

import MaterialTable from 'material-table'
// ============================================================Employee and Employer Context
import { EmployeeContext } from '../../context/employeeContext'

export default function Notification() {
  const [state, setState] = React.useState({
    columns1: [
      // ==================================================================Employee
      { title: 'Notification', field: 'notification' },
      { title: 'Company', field: 'company' },
      { title: 'Vacancy', field: 'vacancy' },
      { title: 'Salary', field: 'salary' } //type: 'numeric'
    ],
    columns2: [
      // ==================================================================Employer
      { title: 'Notification', field: 'notification' },
      { title: 'Delegate', field: 'delegate' },
      { title: 'Vacancy', field: 'vacancy' },
      { title: 'Result', field: 'result' }
    ],
    data1: [
      {
        // ==================================================================Employee
        notification: 'Interview',
        company: 'MYOB',
        vacancy: 'Junior Developer',
        salary: '$30,000 - $70,000'
      },
      {
        // ==================================================================Employee
        notification: 'Interview',
        company: 'IBM',
        vacancy: 'Developer',
        salary: '$60,000 - $90,000'
      }
    ],
    data2: [
      {
        // ==================================================================Employer
        notification: 'Accepted',
        delegate: 'John Smith',
        vacancy: 'Junior Developer',
        result: '89%'
      },
      {
        // ==================================================================Employer
        notification: 'Accepted',
        delegate: 'Jane Doe',
        vacancy: 'Developer',
        result: '73%'
      }
    ]
  })
  // ==================================================================Employee context
  const employeeContext = useContext(EmployeeContext)
  if (employeeContext) {
    return (
      <div className="container">
        <MaterialTable
          title="Notification"
          columns={state.columns1}
          data={state.data1}
        />
      </div>
    )
    //   ==================================================================Employer context
  } else {
    return (
      <div className="container">
        <MaterialTable
          title="Notification"
          columns={state.columns2}
          data={state.data2}
        />
      </div>
    )
  }
}
