import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://localhost:44304/api/',
});

export const usersAPI = {
    getUsers : (currentPage,pageSize) =>{
        return  axios({
            method: 'post',
            url: 'https://localhost:44329/api/user/token/',
            data: {
                "Email" : "user@secureapi.com",
                "Password" :"Pa$$w0rd."
            },
        }).then(response =>{
            return axios.get(`https://localhost:44304/api/Users?page=${currentPage}&count=${pageSize}`,{
                headers: {
                    'Authorization': 'Bearer ' + response.data.token
                }
            })
        }) .then(response =>{

            return response.data });


    },
    Follow : (userId) =>{
        return  axios({
            method: 'post',
            url: 'https://localhost:44329/api/user/token/',
            data: {
                "Email" : "user@secureapi.com",
                "Password" :"Pa$$w0rd."
            },
        })
                .then(response =>{
                   var authOptions = {
                       method: 'POST',
                       url: 'https://localhost:44304/api/Users/'+userId,
                       headers: {
                           'Authorization': 'Bearer ' + response.data.token,
                           'Content-Type': 'application/x-www-form-urlencoded'
                       },
                       json: true
                   };
                    return  axios(authOptions);

        })
                .then(response =>{
                return response;
            });
    },
    UnFollow : (userId) =>{
        return  axios({
            method: 'post',
            url: 'https://localhost:44329/api/user/token/',
            data: {
                "Email" : "user@secureapi.com",
                "Password" :"Pa$$w0rd."
            },
        })
            .then(response =>{

                var authOptions = {
                    method: 'DELETE',
                    url: 'https://localhost:44304/api/Users/'+userId,
                    headers: {
                        'Authorization': 'Bearer ' + response.data.token,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    json: true
                };
                return  axios(authOptions);
            })
            .then(response =>{
                return response;
            });
    },

    getProfile : (userId)=>{
       return axios.get(`https://localhost:44304/api/profile/${userId}`);

    }
}

export const AuthAPI = {
    me : () => {
        return  axios({
            method: 'post',
            url: 'https://localhost:44329/api/user/token/',
            data: {
                "Email" : "user@secureapi.com",
                "Password" :"Pa$$w0rd."
            },
        })
            .then(response =>{

            return axios.get(`https://localhost:44304/api/me`,{
                headers: {
                    'Authorization': 'Bearer ' + response.data.token
                }
            })
        });
    }
}



