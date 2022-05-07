import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form"></div>

          <div className="field"></div>
             <label>Username</label>
             <input type="text" name="username" placeholder="Username" />

          <div className="field"></div>
           <label>Email</label>
          <input  name="Email" placeholder="Email" />

          <div className="field"></div>
             <label>Password</label>
             <input type="Password" name="Password" placeholder="Password" />

          <button className="fluid ui button blue">Submit</button>
      </form>
    </div>
  );
}

export default App;
