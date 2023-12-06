import React from 'react'
import './Register.scss'

function Register() {
  return (
    <div id='registrace'>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email adresa:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">Vaše informace nesdílíme s třetí stranou.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Heslo:</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Heslo znovu:</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-danger">Registrovat</button>
      </form>
    </div>
  )
}

export default Register