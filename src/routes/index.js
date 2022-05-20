//layouts
import HeaderOnly from '~/components/Layout/HeaderOnly'


//pages
import  Home from '~/pages/Home'
import  Folowing from '~/pages/Folowing'
import  Profile from '~/pages/Profile'
import  Upload from '~/pages/Upload'
import  Search from '~/pages/Search'

//publicRoutes
const publicRoutes = [
    {path:'/', component: Home},
    {path:'/folowing', component: Folowing},
    {path:'/profile', component: Profile},
    {path:'/upload', component: Upload, Layout:HeaderOnly },
    {path:'/search', component: Search, Layout:null },
]
const privateRoutes = [

]
export {publicRoutes, privateRoutes}