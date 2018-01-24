import Main from 'containers/Main';
import Page from 'containers/Page';
import Users from 'containers/Users';
import NotFound from 'containers/NotFound';

const routes = [
	{
		path: '/',
		component: Main,
		exact: true,
	},
	{
		path: '/page',
		component: Page,
		exact: true,		
	},
	{
		path: '/users',
		component: Users,
		exact: true,		
	},
	{
		path: '*',
		component: NotFound,
	}
];

export default routes;
