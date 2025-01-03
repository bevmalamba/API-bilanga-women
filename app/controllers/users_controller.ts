import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export default class UsersController {
    async register({ request, response, auth  }: HttpContext) {
        const data = await request.only('fullName', 'email', 'password')
        console.log('validation successful, creating user');

        const user = User.create(data)
        await auth.use('web').login(user)
        return response.json({
          message: 'Inscription réussie',
        });
      }
}