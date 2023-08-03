import React, { Suspense } from 'react';
import { Loading_Icon} from '../utils/icons';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <Loading_Icon/>
        </div>
    );
};
export default Loading
