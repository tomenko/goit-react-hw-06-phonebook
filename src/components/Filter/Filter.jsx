import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchFromProps = dispatch => ({
  onChange: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);

