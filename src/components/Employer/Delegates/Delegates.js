import React , { useState, useContext, useEffect } from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton';
import { EmployerContext } from '../../../context/employerContext';

const StyledWrapper = styled.div`
  border: solid #283593;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 5vh auto;
  border-radius: 10px;
  height: selectedauto;
  width: 70%;
  min-width: 400px;
  max-width: max-content;
  padding: 5vh 3vw;
`

const Delegates = () => {
  const employerContext = useContext(EmployerContext)
  const { getDelegates } = employerContext
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([
      // { name: 'Jimmy', email: 'jimmyjimmy@gmail.com', rating: "70%" },
      // { name: 'Michael', email: 'mich.my@gmail.com', rating: "59%" },
      // { name: 'Daniel', email: 'daniel.dan@gmail.com', rating: "44%" },
      // { name: 'Sam', email: 'samuel.sam@gmail.com', rating: "33%" },
    ]);
  const columns = [
    { title: 'Name', field: 'displayName' ,filtering: false},
    { title: 'Email', field: 'email',filtering: false },
    { title: 'Rating', field: 'rating' ,filtering: false},
    { title: 'Industry', field: 'category'},
  ]
  useEffect(() => {
    const fetchDelegates = async() => {
      const delegates = await getDelegates("Computer")
      const optimisedDelegates = delegates.map((delegate) => {
        delegate.category = delegate.category.join()
        return delegate
      })
      console.log(optimisedDelegates)
      setData(optimisedDelegates)
    }
    fetchDelegates()
  }, [getDelegates])

  return (
    <StyledWrapper>
      <MaterialTable
        title="Delegates"
        columns={columns}
        data={data}
        options={{
          selection: true,
          filtering: true
        }}
        onSelectionChange={(rows) => setSelected(rows)}
      />
      <GeneralButton label="Invite"/>
    </StyledWrapper>
    
  );
}

export default Delegates