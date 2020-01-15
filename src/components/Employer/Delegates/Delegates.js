import React , { useState } from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton';

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
  const [selected, setSelected] = useState([])
  const [data, setData] = useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Rating', field: 'rating' }
    ],
    data: [
      { name: 'Jimmy', email: 'jimmyjimmy@gmail.com', rating: "70%" },
      { name: 'Michael', email: 'mich.my@gmail.com', rating: "59%" },
      { name: 'Daniel', email: 'daniel.dan@gmail.com', rating: "44%" },
      { name: 'Sam', email: 'samuel.sam@gmail.com', rating: "33%" },
    ],
  });

  return (
    <StyledWrapper>
      <MaterialTable
        title="Delegates"
        columns={data.columns}
        data={data.data}
        options={{
          selection: true
        }}
        onSelectionChange={(rows) => setSelected(rows)}
      />
      <GeneralButton label="Invite"/>
    </StyledWrapper>
    
  );
}

export default Delegates