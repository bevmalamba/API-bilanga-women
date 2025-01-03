import mail from "@adonisjs/mail/services/main"

export default class EmailService {
    static async send({ subject, email, to, content }: { subject: string; email: string; to: string; content: string }) {
      await mail.send((message) => {
        message
          .to(to)
          .from(email) // Utilisation de l'email comme expéditeur
          .subject(subject)
          .text(content);
      });
    }
  }
  