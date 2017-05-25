import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const AuthorForm = ({author, onChange, errors}) => {
  return (
    <form>
      <h1>{author.id ? 'Edit' : 'Add'} Author</h1>
      <div className="row">
        <div className="col-md-6">
          <TextInput name="firstName"
                      label="First Name"
                      onChange={onChange}
                      placeholder="First Name"
                      value={author.firstName}
                      error={errors.firstName} />
        </div>
        <div className="col-md-6">
          <TextInput name="lastName"
                      label="Last Name"
                      onChange={onChange}
                      placeholder="Last Name"
                      value={author.lastName}
                      error={errors.lastName} />
        </div>
      </div>
      <input type="submit"
              disabled="false"
              value="Save"
              className="btn btn-primary"
               />
    </form>
  );
};

AuthorForm.propTypes = {
  author : PropTypes.object.isRequired,
  onChange : PropTypes.func.isRequired,
  errors : PropTypes.object
};

export default AuthorForm;
