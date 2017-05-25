import React, {PropTypes} from 'react';

const AuthorList = ({authors}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author =>
          <tr key={author.id}>
            <td></td>
            <td>{author.id}</td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
          </tr>)}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array
};

export default AuthorList;
