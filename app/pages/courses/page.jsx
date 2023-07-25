'use client'
import ListElement from '@/components/ListElement';

import React, {Suspense} from 'react';
import Loading from '@/components/Loading';

import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';


const page = () => {
    return (
        <div>
            <div className="text-black">

            <Suspense fallback={<Loading />}>
          <ListElement />
        </Suspense>

            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ListElement/>
                </PersistGate>
            </Provider>

        </div>
           
        </div>
    )
}

export default page



