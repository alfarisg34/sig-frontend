import { BrowserRouter as Router, Route, Routes, /*Navigate*/ } from "react-router-dom"
import { /*TemplateUser,*/ LandingPage , MapPage } from "../pages/users"
import { LoginPage,DashboardPage, /*TemplateAdmin*/ } from "../pages/admin"
// import { routes, adminRoutes, notLoggedRoute, loggedRoute, /*adminLoginRoute*/ } from "./routes"
// import ScrollToTop from '@components/ScrollToTop'
// import { useAuthContext } from '../contexts/AuthContext'
// import Cookies from 'js-cookie'

function UseRouter() {
    // const authContext = useAuthContext()
    // const logged = Cookies.get('logged')
    // const logged_as_admin = Cookies.get('logged_as_admin')

    return (
        <Router>
            {/* <ScrollToTop /> */}
            <Routes>
                {/* General routes */}
                {/* {routes.map((route) => (
                    <Route
                        // {...route}
                        exact
                        path={route.path()}
                        key={route.name}
                    >
                        <TemplateUser>
                            < route.component />
                        </TemplateUser>
                    </Route>
                ))} */}

                {/* Protect the component after user logged in. In other word, users cannot go to auth page after logged in */}
                {/* {notLoggedRoute.map((route) => (
                    <ProtectAfterAuth
                        exact
                        path={route.path()}
                        key={route.name}
                        user={logged}
                        component={route.component}
                    >
                    </ProtectAfterAuth>
                ))} */}

                {/* Protect the component before user logged in. In other word, users cannot go to profile page after logged in */}
                {/* {loggedRoute.map((route) => (
                    <ProtectBeforeAuth
                        exact
                        path={route.path()}
                        key={route.name}
                        user={logged}
                        component={route.component}
                    ></ProtectBeforeAuth>
                ))} */}

                {/* Protect the component before admin logged in. In other word, admin cannot goes to dashboard page before logged in */}
                {/* {adminRoutes.map((route) => (
                    <ProtectAdminBeforeAuth
                        // {...route}
                        exact
                        path={route.path()}
                        key={route.name}
                        admin={logged_as_admin}
                        component={route.component}
                    ></ProtectAdminBeforeAuth>
                ))} */}

                {/* Protect the component after admin logged in. In other word, admin cannot goes to login page after logged in */}
                {/* {adminLoginRoute.map((route) => (
                    <ProtectAdminAfterAuth
                        // {...route}
                        exact
                        path={route.path()}
                        key={route.name}
                        admin={logged_as_admin}
                        component={route.component}
                    ></ProtectAdminAfterAuth>
                ))} */}
                <Route 
                    element={<DashboardPage></DashboardPage>}
                    path="/dashboard"
                    ></Route>
                <Route 
                    element={<MapPage></MapPage>}
                    path="/map"
                    ></Route>
                <Route 
                    element={<LandingPage></LandingPage>}
                    path="/"
                    ></Route>
                <Route 
                    element={<LoginPage></LoginPage>}
                    path="/admin/login"
                    ></Route>
            </Routes>
        </Router>
    )
}

// const ProtectAdminAfterAuth = ({ admin, component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={() => admin === undefined ? (
//                 <Component />
//             ) : (
//                 <Navigate to="/bff-admin" />
//             )}
//         >
//         </Route>
//     )
// }

// const ProtectAdminBeforeAuth = ({ admin, component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={() => admin === "true" ? (
//                 <TemplateAdmin>
//                     <Component />
//                 </TemplateAdmin>
//             ) : (
//                 <Navigate to="/bff-admin/login" />
//             )}
//         >
//         </Route>
//     )
// }

// const ProtectAfterAuth = ({ user, component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={() => user === undefined ? (
//                 <TemplateUser>
//                     <Component />
//                 </TemplateUser>
//             ) : (
//                 <Navigate to="/" />
//             )}
//         >
//         </Route>
//     )
// }

// const ProtectBeforeAuth = ({ user, component: Component, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             render={() => user === "true" ? (
//                 <TemplateUser>
//                     <Component />
//                 </TemplateUser>
//             ) : (
//                 <Navigate to="/" />
//             )}
//         >
//         </Route>
//     )
// }

export default UseRouter