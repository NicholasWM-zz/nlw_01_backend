import express from 'express'

const routes = express.Router();

routes.get('/', () =>{
	console.log("Listagem Usuarios")
})

export default routes;
