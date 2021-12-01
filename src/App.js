import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
     userSearch: 'quathesage',
     userInfo: {},
     followers: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/quathesage')
    .then(res => {
      this.setState({
        ...this.state,
        userInfo: res.data
      })
    })
    .catch(error => {
      console.error(error)
    })
  }

  componentDidUpdate() {

  }

  render() {
    console.log(this.state)
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
