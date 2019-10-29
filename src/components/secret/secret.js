import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { MAIN_PATH } from '../../constants/const-paths/paths';

const Secret = ({ isLoggedIn }) =>{
    if(isLoggedIn){
        return(
            <span>
                You are signed in
            </span>
        )
    }

    return <Redirect to={MAIN_PATH} />
}

const mapStateToProps = ({isLoggedIn}) => {
    return{
        isLoggedIn
    }
}

export default connect(mapStateToProps)(Secret);
