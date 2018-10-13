import { Dashboard, Login } from '../Pages'

const routes = [
    {
        path:'/',
        exact:true,
        component:Login
    },
    {
        path:'/Dashboard',
        exact:true,
        component:Dashboard
    }
]

export default routes