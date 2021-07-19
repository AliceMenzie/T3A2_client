import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthProvider";
import {Redirect, Route} from 'react-router-dom';

export default function ProtectedRoute({ component: Comp, path, ...rest }) {
    const [auth] = useContext(AuthContext)

    if(auth.loggedIn){
        return(
            <Route path={path} {...rest} render={(props) => {
                return <Comp {...props} />
            }} />
            
        )
    }

    return (
        <Redirect to='/login' />
    )
}
