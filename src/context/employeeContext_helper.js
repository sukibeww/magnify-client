const linkedin_login = () => {
  window.open('http://localhost:3000/auth/linkedin', '_self')
}

const linkedin_logout = async () => {
  await fetch('http://localhost:3000/logout', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  }).then(resp => resp.json())
}

const getProfile = async () => {
  const user = await fetch('http://localhost:3000/login', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  }).then(resp => resp.json())
  return user
}

const saveSurvey = async survey => {
  const resp = await fetch('http://localhost:3000/employee/survey', {
    method: 'POST',
    body: JSON.stringify(survey),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

module.exports = {
  linkedin_login,
  linkedin_logout,
  getProfile,
  saveSurvey
}
