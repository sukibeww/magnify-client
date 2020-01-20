import React from 'react'
import MaterialTable from 'material-table'

export default function Notification() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Notification', field: 'notification' },
      { title: 'Salary', field: 'salary' }, //type: 'numeric'
      {
        title: 'Industry',
        field: 'Industry',
        lookup: {
          1: 'Aerospace',
          2: 'Transport',
          3: 'Computer',
          4: 'Telecommunication',
          5: 'Agriculture',
          6: 'Construction',
          7: 'Education',
          8: 'Pharmaceutical',
          9: 'Food',
          10: 'Health care',
          11: 'Hospitality',
          12: 'Entertainment',
          13: 'News Media',
          14: 'Energy',
          15: 'Manufacturing',
          16: 'Music',
          17: 'Mining',
          18: 'Worldwide web',
          19: 'Electronics'
        }
      },
      { title: 'Status', field: 'status', lookup: { 1: 'Open', 2: 'Closed' } }
    ],
    data: [
      {
        notification: 'Accountant',
        salary: '30000-70000',
        Industry: 2,
        status: 1
      },
      {
        notification: 'Teacher',
        salary: '70000-90000',
        Industry: 1,
        status: 2
      }
    ]
  })

  return (
    <div className="container">
      <MaterialTable
        title="Notification"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                setState(prevState => {
                  const data = [...prevState.data]
                  data.push(newData)
                  return { ...prevState, data }
                })
              }, 600)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data]
                    data[data.indexOf(oldData)] = newData
                    return { ...prevState, data }
                  })
                }
              }, 600)
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve()
                setState(prevState => {
                  const data = [...prevState.data]
                  data.splice(data.indexOf(oldData), 1)
                  return { ...prevState, data }
                })
              }, 600)
            })
        }}
      />
    </div>
  )
}
