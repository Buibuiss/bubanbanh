import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

//pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';

//component
import Header from './components/Header';
import Footer from './components/Footer';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAWLC8DDKKD-A-18JRYn8bqOoKNOMTwAfM',
    authDomain: 'bubu-cake.firebaseapp.com',
    projectId: 'bubu-cake',
    storageBucket: 'bubu-cake.appspot.com',
    messagingSenderId: '366887621579',
    appId: '1:366887621579:web:6616f0096ace1273531c4e',
    measurementId: 'G-WDS0DJWLNN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//layout
const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/products/:id', element: <Products /> },
            { path: '/product/:id', element: <ProductDetails /> },
            { path: '/search', element: <Search /> },
        ],
    },
]);

const App = () => {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
