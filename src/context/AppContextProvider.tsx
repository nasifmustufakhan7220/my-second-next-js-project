"use client"

import { IAppType } from '@/types/AppType';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface ICreateContextType{
    downloads:IAppType[];
    setDownloads:Dispatch<SetStateAction<IAppType[]>>
}


export const appContext = createContext<ICreateContextType>({
    downloads:[],
    setDownloads: ()=>{}
});

const AppContextProvider = ({children}:{children: React.ReactNode}) => {
    const [downloads, setDownloads] = useState<IAppType[]>([]);
    const obj={
        downloads,
        setDownloads
    }
    return (
        <appContext.Provider value={obj}>
            {children}
        </appContext.Provider>
    );
};

export default AppContextProvider;