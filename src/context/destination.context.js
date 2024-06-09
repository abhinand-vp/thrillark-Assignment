"use client"

import * as React from 'react';
import { useDestinationDetails } from '@/hooks';

const Context = React.createContext(null);

export const useDestContext = () =>
    React.useContext(Context);

export function DestContextProvider({
    children
}) {
    return (
        <Context.Provider
            value={{
                ...useDestinationDetails()
            }}
        >
            {children}
        </Context.Provider>
    );
}
