"use client"
import { AuthContextProvider } from '@/context/AuthContext'
import Nav from "@/components/Nav"
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from '@/redux/store';
import {usePathname, useRouter} from "next/navigation"

export  default function AuthLayout() {
    const pathname = usePathname()
    const router = useRouter()
    let isHome = false
    if (pathname === '/') isHome = true
    return (
        <AuthContextProvider>
            <Provider store={store} >
                <PersistGate loading={null} persistor={persistor}>
                    <div className='flex flex-row'>
                        {!isHome && <Nav router={router} />}
                    </div>
                </PersistGate>
            </Provider>
        </AuthContextProvider>
    )
}