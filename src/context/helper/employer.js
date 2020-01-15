const linkedin_login = () => {
  window.open('http://localhost:3000/auth/linkedin/login/employer', '_self')
}

const linkedin_logout = async () => {
  await fetch('http://localhost:3000/logout', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return true
}

const getProfile = async () => {
  try {
    const user = await fetch('http://localhost:3000/login', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    }).then(resp => resp.json())
    return user
  } catch (error) {
    return false
  }
}


const updateEmployer = async editedEmployer => {
  const resp = fetch('http://localhost:3000/employer/update', {
    method: 'PUT',
    body: JSON.stringify(editedEmployer),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

const isRegistered = user => {
  if (!user.companyName) {
    return false
  }
  return true
}

module.exports = {
  linkedin_login,
  linkedin_logout,
  getProfile,
  isRegistered,
  updateEmployer
}
