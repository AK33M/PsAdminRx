import React, {PropTypes} from 'react';
import AuthorList from './AuthorList';
// import * as authorActions from '../../actions/authorActions';

import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';

class AuthorsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }
  render() {
    const {authors} = this.props;

    return (
      <div>
        <h1>Authors</h1>
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
