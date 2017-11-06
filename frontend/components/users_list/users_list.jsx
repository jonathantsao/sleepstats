import React from 'react';

class UsersList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.getUsers();
    return;
  }

  handleClick(id) {
    this.props.getUser(id);
    return;
  }


  render() {
    if (this.props.users.length === 0) {
      return <div></div>;
    } else {
      const allUsers = this.props.users.map((user) => {
        return (
          <li className="user-list-index-item"
            onClick={() => this.handleClick(user["id"])}
            key={user["id"]}>
            {user["name"]}
          </li>
        );
      });
      return (
        <div id="user-list">
          <ul id="user-list-index">
            { allUsers }
          </ul>
        </div>
      );
    }
  }

}

export default UsersList;
