import React, { useState, useContext, useEffect } from 'react'
import MaterialTable from 'material-table'
import styled from 'styled-components'
import GeneralButton from '../../Button/GeneralButton'
import { EmployerContext } from '../../../context/employerContext'
import { MediaContext } from '../../../context/mediaContext'
import { withRouter } from 'react-router-dom'
import loader from './loader.gif'

const StyledWrapper = styled.div`
  padding: ${props => (props.media ? '5vh 15vw' : '5vw 2vw')};
  overflow: scroll;
`

const Delegates = props => {
  const employerContext = useContext(EmployerContext)
  const mediaContext = useContext(MediaContext)
  const { media } = mediaContext.toString()
  const { user, getAllDelegates } = employerContext
  const [selected, setSelected] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      const email_list = selected.map(user => {
        return user.email
      })
      const emailSend = { email: email_list }
      const resp = await fetch('http://localhost:3000/email', {
        method: 'POST',
        body: JSON.stringify(emailSend),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      })
      setLoading(false)
      if (resp) {
        return props.history.push({
          pathname: '/email/success',
          state: { email: email_list }
        })
      }
    }
  }

  return (
    <>
      {!loading ? (
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
            onSelectionChange={rows => {
              setSelected(rows)
            }}
          />
          <GeneralButton
            label="Invite"
            testid="delegates-invite"
            handleClick={inviteEmail}
          />
        </StyledWrapper>
      ) : (
        <div class="box">
          <h1>Sending an email</h1>
          <br />
          <img src={loader} alt="loader" />
          <p class="mute">please wait for a moment...</p>
        </div>
      )}
    </>
  )
}

export default withRouter(Delegates)
