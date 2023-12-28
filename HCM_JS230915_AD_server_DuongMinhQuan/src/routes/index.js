import express  from 'express';
const Router = express.Router()
import usersApi from './apis/users.api'
Router.use("/users",usersApi)
export default Router;