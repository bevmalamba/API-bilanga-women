/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ContactController = () => import('#controllers/contact_controller');
const UsersController = () => import('#controllers/users_controller');

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.post('/register', [UsersController, 'register'])
router.group(()=>{
  router.post("/contact",[ContactController,"contact"])
}).prefix("api")