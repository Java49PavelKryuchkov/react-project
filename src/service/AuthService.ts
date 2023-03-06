import { LoginData } from "../models/LoginData";

export class AuthService {
    private users: LoginData[] = [
        {username: 'pavel@pavel.com', password: '1234'},
        {username: 'oksana@oksana.com', password: '1234'}
    ];
    login(login: LoginData) {
        const match = this.users.find(el => el.password == login.password && el.username == login.username);
        if(!match) 
        {throw new Error ("This user don't exists")}
    }
}