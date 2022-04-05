import React from 'react';

const TrackingPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/live-tracking',
			component: React.lazy(() => import('./TrackingPage'))
		}
	]
};

export default TrackingPageConfig;





