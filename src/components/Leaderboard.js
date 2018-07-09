import React, { Component } from 'react';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.usersRef = this.props.firebase.database().ref('users');
  }
  componentDidMount() {
    this.usersRef.on('child_added', snapshot => {
      const user = snapshot.val();
      user.key = snapshot.key;
      this.setState({ users: this.state.users.concat( user ) });
      this.sortUsers();
    });
  }
  compare(a,b) {
    if (a.score < b.score)
      return -1;
    if (a.score > b.score)
      return 1;
    return 0;
  }
  sortUsers() {
    const users = this.state.users;
    this.setState({ users: users.sort(this.compare).reverse()})
    console.log(this.state.users)
  }
  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        <table id="lBoard">
          <colgroup>
            <col id='user-name' />
            <col id='high-score' />
          </colgroup>
          <tbody className='users'>
            <tr>
              <td className='name'> Name </td> |
              <td className='score'> Score </td>
            </tr>
            {
            this.state.users.map((user, index) =>
               <tr className='users' key={index}>
                <td className='user-name'> { user.name } </td> |
                <td className='high-score'> { user.score } </td>
               </tr>
             )
           }
          </tbody>
        </table>
      </div>
    );
  }
}
export default Leaderboard;
