import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Github Card</h1>
        <form>
          <input />
          <button>Search</button>
        </form>
        <div>
          <img src='https://avatars.githubusercontent.com/u/90537370?v=4'/>
          <h2>DeQuavion Wilburn</h2>
          <h4>Full-Stack Developer</h4>
        </div>
        <div>
          <h2>Followers:</h2>
        </div>
        <div id='followers'>
          <div>
            <img src='https://avatars.githubusercontent.com/u/90537370?v=4'/>
            <h3>User Name</h3>
          </div>
          <div>
            <img src='https://avatars.githubusercontent.com/u/90537370?v=4'/>
            <h3>User Name</h3>
          </div>
          <div>
            <img src='https://avatars.githubusercontent.com/u/90537370?v=4'/>
            <h3>User Name</h3>
          </div>
        </div>
      </div>
    )}
}

export default App;
