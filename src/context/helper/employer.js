const { URL } = require('../../config')

export const linkedin_login = () => {
  window.open(URL + '/auth/linkedin/login/employer', '_self')
}

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
    return user
  } catch (error) {
    return false
  }
}

export const updateEmployer = async editedEmployer => {
  const resp = fetch(URL + '/employer/update', {
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

export const createVacancy = async newVacancy => {
  const resp = fetch(URL + '/vacancies', {
    method: 'POST',
    body: JSON.stringify(newVacancy),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

export const deleteVacancy = async vacancyId => {
  const resp = fetch(URL + `/vacancies/${vacancyId}`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

export const getDelegates = async () => {
  try {
    const employees = await fetch(URL + `/employee/delegates`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    }).then(resp => resp.json())
    return employees
  } catch (error) {
    return error
  }
}

export const getVacanciesOfCompany = async companyId => {
  try {
    const vacancies = await fetch(URL + `/vacancies/${companyId}`, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      }
    }).then(resp => resp.json())
    return vacancies
  } catch (error) {
    return false
  }
}

export const updateVacancy = async updatedVacancy => {
  console.log(updatedVacancy)
  const resp = fetch(URL + `/vacancies/${updatedVacancy._id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedVacancy),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  })
  return resp
}

export const isRegistered = user => {
  if (!user.companyName) {
    return false
  }
  return true
}
