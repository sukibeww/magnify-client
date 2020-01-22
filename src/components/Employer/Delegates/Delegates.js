import React, { useState, useContext, useEffect } from 'react'
import MaterialTable from 'material-table'
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton'
import { EmployerContext } from '../../../context/employerContext'
import { MediaContext } from '../../../context/mediaContext'

const StyledWrapper = styled.div`
  padding: ${props => (props.media ? '5vh 15vw' : '5vw 2vw')};
  overflow: scroll;
`

const Delegates = () => {
  const employerContext = useContext(EmployerContext)
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext
  const { user, getAllDelegates } = employerContext
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([])
  const columns = [
    {
      title: 'Avatar',
      field: 'avatar',
      render: rowData => (
        <img
          style={{ height: 36, borderRadius: '50%' }}
          src={rowData.photos}
          alt="avatar"
        />
      ),
      filtering: false
    },
    { title: 'Name', field: 'displayName', filtering: false },
    { title: 'Email', field: 'email', filtering: false },
    { title: 'Rating', field: 'rating', filtering: false },
    { title: 'Industry', field: 'category' }
  ]
  useEffect(() => {
    let optimisedDelegates
    const fetchDelegates = async optimisedDelegates => {
      const delegates = await getAllDelegates()
      optimisedDelegates = delegates.map(delegate => {
        delegate.category = delegate.category.join()
        delegate.rating = delegate.score.rating
        return delegate
      })
      return optimisedDelegates
    }
    fetchDelegates(optimisedDelegates).then(data => {
      setData(data)
    })
  }, [])

  return (
    <>
      <StyledWrapper data-testid="delegates-table" media={media}>
        <MaterialTable
          title="Delegates"
          columns={columns}
          data={data}
          options={{
            selection: true,
            filtering: true,
            pageSize: 10
          }}
          onSelectionChange={rows => setSelected(rows)}
        />
        <GeneralButton label="Invite" testid="delegates-invite" />
      </StyledWrapper>
    </>
  )
}

export default Delegates
