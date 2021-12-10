import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreater } from '../components/Store';
import { Link } from "react-router-dom"

function ToDOList({id,text,deleteToDo}) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={deleteToDo}>DEL</button>
        </li>
    )
}

ToDOList.propTypes = {
    id : PropTypes.number.isRequired,
    text : PropTypes.string
}

const mapDispacthToProps = (dispacth, props) => {
    return {
        deleteToDo : () => {
            dispacth(actionCreater.deleteToDo(parseInt(props.id)));
        }
    };
}

export default connect(null, mapDispacthToProps)(ToDOList);