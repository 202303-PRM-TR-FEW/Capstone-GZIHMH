import React, { Suspense } from 'react';
import icons from '../utils/icons';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            {icons.map((icon) =>
                icon.name === 'loading' ? (
                    <div key={icon.id} className="flex justify-center items-center icon-tabler-loader animate-spin-slow">
                        {icon.svg}
                    </div>
                ) : null
            )}
        </div>
    );
};
export default Loading
