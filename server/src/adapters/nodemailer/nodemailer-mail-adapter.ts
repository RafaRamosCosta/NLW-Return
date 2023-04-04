import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "61f0ef92516463",
      pass: "bcf0ada093443c"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Rafael Ramos Costa <rrcosta04@gmail.com',
            subject, 
            html: body,
    });
    }
}