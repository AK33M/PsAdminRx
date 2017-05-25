import React from 'react';
import AuthorList from './AuthorList';

class AuthorsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={[]} />
      </div>
    );
  }
}

export default AuthorsPage;
