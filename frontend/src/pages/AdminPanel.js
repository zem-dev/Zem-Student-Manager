const AdminPanel = () => {
  <>
    <h1>New Student</h1>
    <form>
      <label htmlFor="first-name-input">First Name</label>
      <input id="first-name-input" name="firstName"></input>

      <label htmlFor="last-name-input">Last Name</label>
      <input id="last-name-input" name="lastName"></input>

      {/* Inputs for schedule */}

      <label htmlFor="email-input">Email</label>
      <input id="emaiil-input" name="email" type="email"></input>

      <button type="submit">Append student to database</button>
    </form> 
  </>
}

export default AdminPanel;