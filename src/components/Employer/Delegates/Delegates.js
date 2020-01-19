import React , { useState, useContext, useEffect } from 'react';
import MaterialTable from 'material-table';
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton';
import { EmployerContext } from '../../../context/employerContext';
import { MediaContext } from '../../../context/mediaContext';

const StyledWrapper = styled.div`
  border: solid #283593;
  margin: ${(props) => props.media ? "5vw auto" : "5vh 2vw"};
  border-radius: 10px;
  max-width: max-content;
  padding: 5vh 3vw;
  overflow: scroll;
`

const Delegates = () => {
  const employerContext = useContext(EmployerContext)
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  const { user, getAllDelegates } = employerContext
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([]);
  const columns = [
    { title: 'Name', field: 'displayName' ,filtering: false},
    { title: 'Email', field: 'email',filtering: false },
    { title: 'Rating', field: 'rating' ,filtering: false},
    { title: 'Industry', field: 'category'},
  ]
  useEffect(() => {
    const fetchDelegates = async() => {
      const delegates = await getAllDelegates()
      const optimisedDelegates = delegates.map((delegate) => {
        delegate.category = delegate.category.join()
        delegate.rating = delegate.score.rating
        return delegate
      })
      console.log(optimisedDelegates)
      setData(optimisedDelegates)
    }
    fetchDelegates()
  }, [getAllDelegates])

  return (
    <>
      <StyledWrapper data-testid="delegates-table" media={media}>
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
        <GeneralButton label="Invite" testid="delegates-invite"/>
      </StyledWrapper>
    </>
  );
}

export default Delegates