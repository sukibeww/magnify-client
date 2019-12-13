const linkedin_login = () => {
  window.open('http://localhost:3000/auth/linkedin', '_self')
}

const linkedin_logout = async () => {
  const user = await fetch('http://localhost:3000/logout', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  }).then(resp => resp.json())
  console.log(user)
}

const getProfile = async () => {
  const user = await fetch('http://localhost:3000/login', {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true
    }
  }).then(resp => resp.json())
  console.log(user)
  return user
}

module.exports = {
  linkedin_login,
  linkedin_logout,
  getProfile
}
