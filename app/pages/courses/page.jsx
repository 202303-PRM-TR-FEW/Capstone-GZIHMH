'use client'
import ListElement from '@/components/ListElement';
import React, {Suspense} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import Loading from '@/components/Loading';

const page = () => {
    return (
        <div>
            <div className="text-black">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<Loading />}>
                    <ListElement/>
                    </Suspense>
                </PersistGate>
            </Provider>
        </div>
           
        </div>
    )
}

export default page



