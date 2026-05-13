import Cookies from 'js-cookie';
import { AuthService } from "@/services/auth.service"
import { useUserStore } from '@/providers/user-store-provider';
import { UserStore } from '@/store/userStore';

export const useLogin =  () => {
        
    
    const login  = async  (email:string, password: string) => {
        const authService = new AuthService("http://localhost:3001"); 
        const {setUser} = useUserStore((state:UserStore)=> state);

        const user: any = await authService.login(email,password); 
        if(user){
            setUser({email: user.email, token: user.token});
            Cookies.set('currentUser', JSON.stringify(user));
        }

        return user;
    }

    return {login};
}