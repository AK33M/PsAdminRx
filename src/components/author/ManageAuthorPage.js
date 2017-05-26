import React, {PropTypes} from 'react';
import AuthorForm from './AuthorForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import * as authorActions from '../../actions/authorActions';

export class ManageAuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      author: Object.assign({}, props.author),
      errors: {}
    };

    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.author.id != nextProps.author.id){
      this.setState({
        author: Object.assign({}, nextProps.author)});
    }
  }

	updateAuthorState(event) {
		const field = event.target.name;
		let author = this.state.author;
		author[field] = event.target.value;
		return this.setState({
			author: author
		});
	}

  authorFormIsValid(){
		let formIsVaild = true;
		let errors ={};

		if(this.state.author.firstName.length < 2){
			errors.firstName = 'First Name must be at least 2 characters.';
			formIsVaild = false;
		}

    if(this.state.author.lastName.length < 2){
			errors.lastName = 'Last Name must be at least 2 characters.';
			formIsVaild = false;
		}

		this.setState({errors: errors});
		return formIsVaild;
	}

  saveAuthor(event) {
    event.preventDefault();
    if(!this.authorFormIsValid()){
      return;
    }
    this.setState({saving: true});
    this.props.actions.saveAuthor(this.state.author)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect(){
    this.setState({saving: false});
    toastr.success('Author saved!');
    this.context.router.push('/authors');
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

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes ={
  router: PropTypes.object
};

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
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
