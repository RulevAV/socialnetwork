import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://localhost:44304/api/',
});

let Auth = () =>{
    return axios({
        method: 'post',
        url: 'https://localhost:44329/api/user/token/',
        data: {
            "Email" : "user@secureapi.com",
            "Password" :"Pa$$w0rd."
        },
    });
}

export const ProfileAPI = {
    getProfile : (userId)=>{
       return  Auth()
           .then(response =>{
               return axios.get(`https://localhost:44304/api/Profile/${userId}`,{
                   headers: {
                       'Authorization': 'Bearer ' + response.data.token
                   }
               })
           })
    },
    getStatus : (userId) =>{
        return Auth()
            .then(response =>{
                return axios.get(`https://localhost:44304/api/Status/${userId}`,{
                    headers: {
                        'Authorization': 'Bearer ' + response.data.token
                    }
                })
            })
    },
    updateStatus : (status) =>{
        return Auth()
            .then(response =>{
                return axios.put(`https://localhost:44304/api/Status/?str=${status}`,{},{
                    headers: {
                        'Authorization': 'Bearer ' + response.data.token
                    }
                })
            })
    }
}

export const usersAPI = {
    getUsers : (currentPage,pageSize) =>{
        return  Auth()
            .then(response =>{
            return axios.get(`https://localhost:44304/api/Users?page=${currentPage}&count=${pageSize}`,{
                headers: {
                    'Authorization': 'Bearer ' + response.data.token
                }
            })
        }) .then(response =>{

            return response.data });


    },
    Follow : (userId) =>{
        return Auth()
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
        return  Auth()
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
        console.warn("Obsolete method: please profileAPI object")
        return ProfileAPI.getProfile(userId)

    }
}


export const AuthAPI = {
    me : () => {
        return  Auth()
            .then(response =>{

            return axios.get(`https://localhost:44304/api/me`,{
                headers: {
                    'Authorization': 'Bearer ' + response.data.token
                }
            })
        });
    }
}



