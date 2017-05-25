import React, {PropTypes} from 'react';
import AuthorForm from './AuthorForm';
import {connect} from 'react-redux';
import {loadAuthors} from '../../actions/authorActions';

export class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      author: Object.assign({}, props.author),
      authors: loadAuthors(),
      errors: {}
    };

  }
	updateAuthorState(event) {
		const field = event.target.name;
		let author = this.state.course;
		author[field] = event.target.value;
		return this.setState({
			author: author
		});
	}
  saveAuthor(event) {
    event.preventDefault();
    if(!this.authorFormIsValid()){
      return;
    }

    this.setState({saving: true});
    // this.props.actions.saveAuthor(this.state.author);

  }
  render() {
    return (
        <AuthorForm author={this.state.author}
                    errors={this.state.errors}
                    onChange={this.updateAuthorState}
                    onSave={this.saveAuthor}
                    saving={this.state.saving} />
    );
  }
}

function getAuthorById(authors, id) {
  const author = authors.filter(author => author.id == id);
  if(author) return author[0];
  return null;
}

function mapStateToProps(state, ownProps) {
	const authorId = ownProps.params.id;
	let author = { id: '', firstName: '', lastName: '' };
  if(authorId && state.authors.length > 0){
    author = getAuthorById(state.authors, authorId);
  }

	return {
		author: author
	};
}

function mapDispatchToProps(dispatch) {
  return {
    loadAuthors: () => {
      dispatch(loadAuthors());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
