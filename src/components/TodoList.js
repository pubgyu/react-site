import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreater } from '../components/Store';

function ToDOList({id,text,deleteToDo}) {
    return (
        <li>{text}<button onClick={deleteToDo}>DEL</button></li>
    )
}

ToDOList.propTypes = {
    id : PropTypes.number.isRequired,
    text : PropTypes.string
}

const mapDispacthToProps = (dispacth, props) => {
    return {
        deleteToDo : props => dispacth(actionCreater.deleteToDo(parseInt(props.id)))
    };
}

export default connect(null, mapDispacthToProps)(ToDOList);