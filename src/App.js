import { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct/AddProduct';
import Admin from './Components/Admin/Admin';
import EditProducts from './Components/EditProducts/EditProducts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Orders from './Components/Orders/Orders';
import ProductCheckOut from './Components/ProductCheckOut/ProductCheckOut';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [signedInUser, setSignedInUser] = useState({})
  return (
    <UserContext.Provider value={[signedInUser, setSignedInUser]}>
    <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/admin'>
          <Admin></Admin>
        </PrivateRoute>
        <Route path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route path="/manageProduct">
          <ManageProduct></ManageProduct>
        </Route>
        <Route path='/editProduct'>
          <EditProducts></EditProducts>
        </Route>
        <PrivateRoute path='/orders'>
          <Orders></Orders>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path="/products/:id">
          <ProductCheckOut></ProductCheckOut>
        </Route>
      </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
