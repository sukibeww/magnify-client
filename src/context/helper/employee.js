const { URL } = require('../../config')

export const linkedin_logout = async () => {
  await fetch(URL + '/logout', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return true
}

export const getProfile = async () => {
  try {
    const user = await fetch(URL + '/login', {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    }).then(resp => resp.json())
    if (user) {
      return user
    }
    return false
  } catch (error) {
    return false
  }
}

export const isRegistered = user => {
  if (user.category.length === 0) {
    return false
  }
  return true
}

export const saveSurvey = async survey => {
  const resp = await fetch(URL + '/employee/survey', {
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

export const fetchSubmitSurvey = async survey => {
  const resp = await fetch(URL + '/employee/result', {
    method: 'POST',
    body: JSON.stringify(survey),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  }).then(resp => resp.json())
  return resp
}

export const updateEmployee = async editedEmployee => {
  const resp = fetch(URL + '/employee/update', {
    method: 'PUT',
    body: JSON.stringify(editedEmployee),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

module.exports = {
  linkedin_logout,
  getProfile,
  saveSurvey,
  fetchSubmitSurvey,
  isRegistered,
  updateEmployee
}
