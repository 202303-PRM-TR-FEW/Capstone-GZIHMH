import ListElement from '@/components/ListElement';
import React, {Suspense} from 'react';
import Loading from '@/components/Loading';


const page = () => {
    return (
        <div>
            <div className="text-black">
            <Suspense fallback={<Loading />}>
          <ListElement />
        </Suspense>
        </div>
           
        </div>
    )
}

export default page



