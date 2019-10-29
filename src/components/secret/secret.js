import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const Secret = ({ isLoggedIn }) =>{
    if(isLoggedIn){
        return(
            <span>
                You are signed in
            </span>
        )
    }

    return <Redirect to="/" />
}

const mapStateToProps = ({isLoggedIn}) => {
    return{
        isLoggedIn
    }
}

export default connect(mapStateToProps)(Secret);