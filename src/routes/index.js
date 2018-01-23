import Main from 'containers/Main';
import Page from 'containers/Page';
import Users from 'containers/Users';

const routes = [
	{
		path: '/',
		component: Main,
		exact: true,
	},
	{
		path: '/page',
		component: Page,
	},
	{
		path: '/users',
		component: Users,
	},
];

export default routes;
