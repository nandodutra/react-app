import React from 'react';
import { connect } from 'react-redux';
import Paper from "@material-ui/core/Paper";
import { addAction, changeDescription, addAppNotification } from '../../AppActions';

const Home = (props) => {
    return (
        <Paper className="content-paper"> 
            <h1>My home app</h1>
            <input type="text" id="description" onChange={props.changeDescription} value={props.description} />
            <button onClick={() => props.addAppNotification({ description: props.description })}>add</button>
        </Paper>
    )
}

const mapStateToProps = state => ({
    ...state,
    appNotifications: state.appNotifications
  });
  
const mapDispatchToProps = { addAction, changeDescription, addAppNotification };

export default connect(mapStateToProps, mapDispatchToProps)(Home);