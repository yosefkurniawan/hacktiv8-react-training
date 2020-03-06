import React, {lazy, Suspense} from 'react';

const Podcast = lazy(() => import('../podcast'));

function Content() {
    return (
        <div className="body">
            <Suspense>
                <Podcast />
            </Suspense>

            {/* in the future, another page such as user profile, payment, etc can be added here. for now we just have podcast pages */}
        </div>
    );
}

export default Content;