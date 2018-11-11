import Fetcher from 'request';
import User from '../Classes/User';

export  function fetchCurrentUser(returnFunction) {
        Fetcher.get(window.location.origin + '/api/Users/current', {
            'auth': {
                'bearer': window.localStorage.accessToken || ''
            }
        }, (error, response, body) => {
            console.log("_______");
            console.log(response);
            if (response.statusCode == 200) {
                // this.setState({
                returnFunction(new User(body));
             //   })
            } else {
                try {
                    this.googleLogout.signOut()
                } catch (e) { }
                window.localStorage.accessToken = '';
                returnFunction(null);
            }
        })
};