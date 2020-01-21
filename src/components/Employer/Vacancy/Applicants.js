import React, {useContext, useState } from 'react'
import MaterialTable from 'material-table'
import { EmployerContext } from '../../../context/employerContext'
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

const columns = [
  {
    title: 'Avatar',
    field: 'avatar',
    render: rowData => (
      <img
        style={{ height: 36, borderRadius: '50%' }}
        src={rowData.photos}
      />
    ),
  },
  { title: 'Name', field: 'displayName' ,filtering: false},
  { title: 'Email', field: 'email',filtering: false },
  { title: 'Rating', field: 'rating' ,filtering: false},
  { title: 'Industry', field: 'category'},
  { title: 'Interview', render: rowData => <DoneIcon/> },
  { title: 'Decline', render: rowData => <CloseIcon/> },
]

const dummy = [
  { displayName: 'Jimmy', email: 'jimmyjimmy@gmail.com', rating: "70%", category: "Computer", photos: "https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak"},
  { displayName: 'Michael', email: 'mich.my@gmail.com', rating: "59%", category: "Computer" , photos: "https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak"},
  { displayName: 'Daniel', email: 'daniel.dan@gmail.com', rating: "44%", category: "Computer" , photos: "https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak"},
  { displayName: 'Sam', email: 'samuel.sam@gmail.com', rating: "33%", category: "Computer" , photos: "https://media-exp2.licdn.com/dms/image/C5603AQGdMNSnZWPuyw/profile-displayphoto-shrink_800_800/0?e=1585180800&v=beta&t=H7Kcuq0grVO0i0pvvtsCHNw0e_b3vaAXMpKlolZP2ak"},
]

const Applicants = (props) => {
  const employerContext = useContext(EmployerContext)
  const { updateVacancyById, user, createNewVacancy, companyVacancies, getAllVacanciesOfCompany, deleteVacancyById} = employerContext
  const [ applicants, setApplicants ] = useState(dummy)

  return (
    <div className="container">
      <MaterialTable
        title="Applicants"
        columns={columns}
        data={applicants}
        options={{
          pageSize: 5
        }}
      />
    </div>
  )
}

export default Applicants