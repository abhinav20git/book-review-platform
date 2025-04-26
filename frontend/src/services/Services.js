import axios from 'axios';

export const LoginHandler = async ({ email, password }) => {

        const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/login`, { email, password });
        return resp;
};


export const registerHandler = async ({email, password, fullName})=>{

    const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/register`,{email,password,fullName});
    return resp;

}


export const LogOutHandler = () => {
    localStorage.removeItem('token');
    window.location.reload();
}
