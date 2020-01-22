import React, { useContext, useState } from 'react'
import MaterialTable from 'material-table'
import { EmployerContext } from '../../../context/employerContext'
import SearchIcon from '@material-ui/icons/Search'

const columns = [
  {
    title: 'Avatar',
    field: 'avatar',
    render: rowData => (
      <img style={{ height: 36, borderRadius: '50%' }} src={rowData.photos} />
    )
  },
  { title: 'Name', field: 'displayName', filtering: false },
  { title: 'Email', field: 'email', filtering: false },
  { title: 'Rating', field: 'rating', filtering: false },
  {
    title: 'Status',
    field: 'status',
    lookup: {
      Pending: 'Pending',
      Employed: 'Employed'
    }
  },
  { title: 'Details', render: rowData => <SearchIcon /> }
]

const dummy = [
  {
    status: 'Pending',
    displayName: 'Jimmy',
    email: 'jimmyjimmy@gmail.com',
    rating: '70%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  },
  {
    status: 'Employed',
    displayName: 'Michael',
    email: 'mich.my@gmail.com',
    rating: '59%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  },
  {
    status: 'Pending',
    displayName: 'Daniel',
    email: 'daniel.dan@gmail.com',
    rating: '44%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  },
  {
    status: 'Employed',
    displayName: 'Sam',
    email: 'samuel.sam@gmail.com',
    rating: '33%',
    category: 'Computer',
    photos:
      'https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak'
  }
]

const VacancyEmployee = props => {
  const employerContext = useContext(EmployerContext)
  const {
    updateVacancyById,
    user,
    createNewVacancy,
    companyVacancies,
    getAllVacanciesOfCompany,
    deleteVacancyById
  } = employerContext
  const [employees, setVacancyEmployee] = useState(dummy)

  return (
    <MaterialTable
      title="Employees"
      columns={columns}
      data={employees}
      options={{
        pageSize: 5
      }}
    />
  )
}

export default VacancyEmployee
