import axios from 'axios';

const BaseUrl=`http://localhost:4000/user`;



  export function addUser(user){
        return axios.post(BaseUrl,user);
    }

    export function getUsers(){
        return axios.get(BaseUrl);
    }

    export function getUserId(id){
        return axios.get(BaseUrl+"/"+id);
    }

    export function deleteUser(id){
        return axios.delete(BaseUrl+"/"+id);
    }
    export function updateUser(employe,id){
        return axios.put(BaseUrl+"/"+id,employe);
    }
  
