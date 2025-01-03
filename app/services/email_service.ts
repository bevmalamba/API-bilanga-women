import mail from "@adonisjs/mail/services/main"

export default class EmailService{
    static async send({subject,to,content}:{subject:string,email:string,to:string,content:string}){
        await mail.send((message) => {
            message
            .to(to)
            .subject(subject)
            .text(content)
        })
    }
}