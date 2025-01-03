import type { HttpContext } from '@adonisjs/core/http'
import { contactValidator } from '../validators/contact.js'
import EmailService from '../services/email_service.js'


export default class ContactController {
  async contact({ request, response }: HttpContext) {
    try {
      // Validation des données
      const data = await contactValidator.validate(request.all());

      const { email, message, subject } = data;

      // Appel du service EmailService pour envoyer un email
      await EmailService.send({
        to: "bevmalamba@gmail.com",
        subject,
        content: message,
        email,
      });

      // Réponse réussie
      return response.ok({ message: "Email envoyé avec succès." });
    } catch (error) {
      console.error(error);
      return response.badRequest({ message: "Erreur lors de l'envoi de l'email." });
    }
  }
}
