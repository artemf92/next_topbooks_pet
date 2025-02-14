export const API = {
	topPage: {
		find: process.env.NEXT_PUBLIC_API + '/api/top-page/find',
		byAlias: process.env.NEXT_PUBLIC_API + '/api/top-page/byAlias/'
	},
	product: {
		find: process.env.NEXT_PUBLIC_API + '/api/product/find'
	},
	review: {
		createDemo: process.env.NEXT_PUBLIC_API + '/api/review/create-demo'
	}
};

export const MyAPI = {
	courses: {
		all: process.env.NEXT_PUBLIC_MY_API + '/api/kursies'
	},
	menu: {
		all: process.env.NEXT_PUBLIC_MY_API + '/api/navigation',
		primary: process.env.NEXT_PUBLIC_MY_API + '/api/navigation/render/navigation',
		child: process.env.NEXT_PUBLIC_MY_API + '/api/navigation/render/navigation/',
	}
};