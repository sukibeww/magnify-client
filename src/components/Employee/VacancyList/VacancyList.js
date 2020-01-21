import React, { useState ,useContext } from 'react'
import MaterialTable from 'material-table';
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton';
import { MediaContext } from '../../../context/mediaContext';

const StyledWrapper = styled.div`
  padding: ${(props) => props.media ? "5vh 15vw" : "5vw 2vw"};
  overflow: scroll;
`

// Title, description, creator, salary, industry, applicants, isOpen

const dummy = [
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  },
  {
    title: "Developer",
    description: "React, Express, Database, IT stuff",
    creator: "BOYM",
    salary: "30000-50000",
    industry: "Information Technology",
    isOpen: "true"
  }
]

const VacanciesList = () => {
  const mediaContext = useContext(MediaContext)
  const [selected, setSelected] = useState([])
  const [data, setData] = useState(dummy);
  const { media } = mediaContext
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
    { title: 'Status', field: 'isOpen'},
    { title: 'Description', field: 'description'}
  ]
  
  return (
    <>
      <StyledWrapper data-testid="vacancy-table" media={media}>
        <MaterialTable
          title="Vacancy List"
          columns={columns}
          data={data}
          options={{
            selection: true,
            pageSize: 10
          }}
          onSelectionChange={(rows) => setSelected(rows)}
        />
        <GeneralButton label="Apply" testid="apply-button" />
      </StyledWrapper>
    </>
  )
}

export default VacanciesList