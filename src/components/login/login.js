import { Fragment } from "react"

function Login(){
  return(
    <Fragment>
      <form>
        <input type="text"/>
        <input type="password"/>
        <input type="submit" value="login" />
      </form>
    </Fragment>
  )
}

export default Login;