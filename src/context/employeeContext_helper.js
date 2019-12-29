const axios = require('axios')

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

const isRegistered = (user) => {
  if(user.category.length === 0 ){
    return false
  }
  return true
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

const updateEmployee = async (editedEmployee) => {
  axios.put('http://localhost:3000/employee/update', {
    editedEmployee: editedEmployee
  })
  .then((res)=> {
    console.log(res)
  })
  .catch((err)=> {
    console.log(err)
  })
}

module.exports = {
  linkedin_login,
  linkedin_logout,
  getProfile,
  saveSurvey,
  isRegistered,
  updateEmployee
}
