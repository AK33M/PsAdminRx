import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CourseForm from './CourseForm';
import * as courseAction from '../../actions/courseAction';

class ManageCoursePage extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			course: Object.assign({}, props.course),
			errors: {}
		};
	}
	render() {
		return (
			<CourseForm course={this.state.course}
			 						errors={this.state.errors}
									allAuthors={[]}/>
		);
	}
}

ManageCoursePage.PropTypes = {
	course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	let course = { id:'', watchHref: '', title: '', authorId: '', length: '', category: ''};
	return {course: course};
}

function mapDispatchToProps(dispatch) {
	return {actions: bindActionCreators(courseAction, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
