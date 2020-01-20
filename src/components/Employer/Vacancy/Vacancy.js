import React, {useContext, useState, useEffect, useForceUpdate} from 'react'
import MaterialTable from 'material-table'
import { EmployerContext } from '../../../context/employerContext'
import { useHistory } from 'react-router-dom'

const columns = [
  { title: 'Title', field: 'title'},
  { title: 'Company', field: 'creator'},
  { title: 'Salary', field: 'salary'},
  { title: 'Industry', field: 'industry', lookup: { 
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
  }},
  { title: 'Status', field: 'isOpen', lookup: {1: "Open", 2:"Closed"}},
  { title: 'Description', field: 'description'}
]

const Vacancy = (props) => {
  let history = useHistory()
  const employerContext = useContext(EmployerContext)
  const { user, createNewVacancy, companyVacancies, getAllVacanciesOfCompany} = employerContext
  const [ vacancies, setVacancies ] = useState({
    data: companyVacancies,
    resolve: () =>{}, 
    updatedAt: new Date(),
    columns: columns
  })

  useEffect(() => {
    vacancies.resolve()
    console.log(companyVacancies);   
  }, [vacancies]);
  
  const onRowDelete = oldData =>
    new Promise((resolve, reject) => {
      const { data } = vacancies;
      const updatedAt = new Date();
      const index = data.indexOf(oldData);
      data.splice(index, 1);
      setVacancies({ ...vacancies, data, resolve, updatedAt });
  });

  const onRowUpdate = (newData, oldData) =>
    new Promise((resolve, reject) => {
      const { data } = vacancies;
      const updatedAt = new Date();
      const index = data.indexOf(oldData);
      data[index] = newData;
      setVacancies({ ...vacancies, data, resolve, updatedAt });
    });


  const onRowAdd = newData =>
    new Promise((resolve, reject) => {
      setTimeout(async() => {
        newData.creator = user._id
        newData.applicants = []
        if(newData.isOpen === 1){
          newData.isOpen = true
        }
        else{
          newData.isOpen = false
        }
        const { data } = vacancies;
        const updatedAt = new Date();
        await createNewVacancy(newData)
        const result = await getAllVacanciesOfCompany()
        const vacancy = result.pop()
        history.push(`/vacancies/${vacancy._id}`)
        // data.push(vacancy);
        // setVacancies({ ...vacancies, data, resolve, updatedAt });
      }, 3000, () => resolve())
    });

  return (
    <div className="container">
      <MaterialTable
        title="Vacancy"
        columns={vacancies.columns}
        data={vacancies.data}
        options={{
          pageSize: 10
        }}
        editable={{
          isEditable: rowData => true,
          isDeletable: rowData => true,
          onRowAdd: onRowAdd,
          onRowUpdate: onRowUpdate,
          onRowDelete: onRowDelete
        }}
      />
    </div>
  )
}

export default Vacancy