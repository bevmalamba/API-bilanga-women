import type { HttpContext } from '@adonisjs/core/http'
import User from '../models/user.js'

export default class UsersController {
  async register({ request, response, auth }: HttpContext) {
    try {
      // Récupérer et valider les données
      const { fullName, email, password } = request.only(['fullName', 'email', 'password'])

      console.log('Validation réussie, création de l’utilisateur en cours.')

      // Créer l'utilisateur dans la base de données
      const user = await User.create({
        fullName,
        email,
        password,
      })

      // Connecter l'utilisateur immédiatement après l'inscription
      await auth.use('web').login(user)

      // Retourner une réponse de succès
      return response.json({
        message: 'Inscription réussie',
        user,
      })
    } catch (error) {
      console.error('Erreur lors de l’inscription :', error)

      // Gérer les erreurs et retourner une réponse appropriée
      return response.badRequest({
        message: "Une erreur s'est produite pendant l'inscription.",
        error: error.message,
      })
    }
  }
}
