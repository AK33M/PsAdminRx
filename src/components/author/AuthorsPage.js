import React, {PropTypes} from 'react';
import AuthorList from './AuthorList';
// import * as authorActions from '../../actions/authorActions';

import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
// import {bindActionCreators} from 'redux';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  render() {
    const {authors} = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <input type="submit" value="Add Author" className="btn btn-primary" onClick={this.redirectToAddAuthorPage}/>
        <AuthorList authors={authors} />
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  // actions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return { authors: state.authors};
}

// function mapDispatchToProps(dispatch) {
//   return {
//     loadCourses: () => {
//       dispatch(loadCourses());
//     }
//   };
// }

export default connect(mapStateToProps)(AuthorsPage);
