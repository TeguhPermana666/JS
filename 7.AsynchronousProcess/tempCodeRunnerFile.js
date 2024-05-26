
// 3. Promise

import {getUser, getWeather} from './utils_promise.js';

function getuserWeathers(userId){
    let user;
    return getUser(userId)
        .then((_user) => {
            user = _user;
            return getWeather(user.location)
        })
        .then((weather)=>({...user, ...weather}))
}

getuserWeathers(1)
    .then(console.log)
    .catch(console.log);