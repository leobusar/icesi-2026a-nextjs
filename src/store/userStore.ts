import { createStore } from "zustand";

export type UserState = {
    email: string;
    token: string;
}

export type UserActions  =  {
    initUser: () => void; 
    setUser: (user: UserState) => void;
    setToken: (token: string) => void;
}

export type UserStore  = UserState  &  UserActions; 

export const defaultInitState: UserState = { email: "", token: "" }

export const createUserStore = (initState: UserState = defaultInitState ) => 
    {
        return createStore<UserStore>((set, get)=>({
            ...initState,
            initUser: () => set({ email: "", token: "" }),
            setUser: (user) => set(user),
            setToken: (token) => set({email:get().email, token}),            
        }))
    }                                               
