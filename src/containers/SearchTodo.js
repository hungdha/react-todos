import {connect} from 'react-redux'
import {setVisibilityFilterByKeyword} from '../actions'
import SearchForm from '../components/SearchForm';

const mapStateToProps = (state, ownProps) => ({
    keyword: state.keyword
})
const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSearch: (e) => dispatch(setVisibilityFilterByKeyword(e.target.value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm)
