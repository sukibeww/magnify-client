import React, {useContext, useState } from 'react'
import MaterialTable from 'material-table'
import { EmployerContext } from '../../../context/employerContext'

const columns = [
  { title: 'Title', field: 'title'},
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
  { title: 'Status', field: 'isOpen', lookup: {true: "Open", false:"Closed"}},
  { title: 'Description', field: 'description'}
]

const Vacancy = (props) => {
  const employerContext = useContext(EmployerContext)
  const { user, createNewVacancy, companyVacancies, getAllVacanciesOfCompany, deleteVacancyById} = employerContext
  const [ vacancies, setVacancies ] = useState({
    data: companyVacancies,
    resolve: () =>{}, 
    updatedAt: new Date(),
    columns: columns
  })
  
  const onRowDelete = oldData =>
    new Promise((resolve, reject) => {
      setTimeout(async() => {
        deleteVacancyById(oldData._id)
        const result = await getAllVacanciesOfCompany()
        resolve()
        setVacancies((prevState)=> {
          const newState = prevState
          prevState.data = result
          return {...newState}
        })
      }, 1000)
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
        await createNewVacancy(newData)
        const result = await getAllVacanciesOfCompany()
        resolve()
        setVacancies((prevState)=> {
          const newState = prevState
          prevState.data = result
          return {...newState}
        })
      }, 1000)
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