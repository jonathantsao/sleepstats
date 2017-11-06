import React from 'react';

class UsersList extends React.Component {

  componentWillMount() {
    this.props.getUsers();
    return;
  }


  render() {
    if (this.props.users.length === 0) {
      return <div></div>;
    } else {
      const allUsers = this.props.users.map((user) => {
        return <li key={user["id"]}>{user["name"]}</li>;
      });
      return (
        <div>
          <ul>
            { allUsers }
          </ul>
        </div>
      );
    }
  }

}

export default UsersList;
