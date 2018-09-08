import api from '../helpers/axiosHelper';

class UserService {

    getLoggedInUser = (callback) => {
        api.get('user')
        .then((response) => {
            callback(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default UserService;