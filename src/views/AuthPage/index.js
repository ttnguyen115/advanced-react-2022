import React from 'react'
import PropTypes from 'prop-types'
import Signin from '../../components/AuthForm/Signin'

function AuthPage(props) {
  return (
    <div className="auth-page">
      <Signin />
    </div>
  )
}

AuthPage.propTypes = {}

export default AuthPage
