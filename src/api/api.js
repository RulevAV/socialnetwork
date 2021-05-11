import * as axios from "axios";

const instance = axios.create({
    baseURL:'https://localhost:44304/api/',
});

export const usersAPI = {
    getUsers : (currentPage,pageSize) =>{
        return axios.get(`https://localhost:44304/api/User?page=${currentPage}&count=${pageSize}`)
            .then(response =>{return response.data });
    },
    Follow : (currentPage,pageSize) =>{
        return  axios({
            method: 'post',
            url: 'https://localhost:44329/api/user/token/',
            data: {
                "Email" : "user@secureapi.com",
                "Password" :"Pa$$w0rd."
            },
        })
                .then(response =>{
           return axios.delete(`https://localhost:44304/api/Follow/3`,{
                headers: {
                    'Authorization': 'Bearer ' + response.data.token
                }
            })
        })
                .then(response =>{
                return response;
            });
    },
    UnFollow : (currentPage,pageSize) =>{
        return  axios({
            method: 'post',
            url: 'https://localhost:44329/api/user/token/',
            data: {
                "Email" : "user@secureapi.com",
                "Password" :"Pa$$w0rd."
            },
        })
            .then(response =>{
                return axios.post(`https://localhost:44304/api/Follow/3`,{
                    headers: {
                        'Authorization': 'Bearer ' + response.data.token
                    }
                })
            })
            .then(response =>{
                return response;
            });
    }
}





/*export let getUsers = () =>{
    axios({
        method: 'post',
        url: 'https://localhost:44329/api/user/token/',
        data: {
            "Email" : "user@secureapi.com",
            "Password" :"Pa$$w0rd."
        },
    }).then(response =>{
        axios.delete(`https://localhost:44304/api/Follow/3`,{
            headers: {
                'Authorization': 'Bearer ' + response.data.token
            }
        }).then(response =>{
            if(response.status === 200)
            {
                props.unfollow(u.id)
            }
        });
    });

}*/

