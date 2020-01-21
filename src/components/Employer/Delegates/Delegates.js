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
  const { media } = mediaContext.toString()
  const { user, getAllDelegates } = employerContext
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([])
  const columns = [
    { title: 'Name', field: 'displayName', filtering: false },
    { title: 'Email', field: 'email', filtering: false },
    { title: 'Rating', field: 'rating', filtering: false },
    { title: 'Industry', field: 'category' }
  ]
  useEffect(() => {
    if (user.email) {
      async function fetchDelegates() {
        let delegates = await getAllDelegates()
        delegates = delegates.map(delegate => {
          delegate.category = delegate.category.join()
          delegate.rating = delegate.score.rating
          return delegate
        })
        setData(delegates)
      }
      fetchDelegates()
    }
  }, [user.email, getAllDelegates])

  const inviteEmail = async () => {
    if (selected.length > 0) {
      const email_list = selected.map(user => {
        return user.email
      })
      const resp = fetch('http://localhost:3000/email', {
        method: 'get',
        // body: JSON.stringify(editedEmployee),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      })
      return resp
    }
  }

  return (
    <>
      {user.email ? (
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
          <GeneralButton
            label="Invite"
            testid="delegates-invite"
            handleClick={inviteEmail}
          />
        </StyledWrapper>
      ) : (
        'loading'
      )}
    </>
  )
}

export default Delegates
