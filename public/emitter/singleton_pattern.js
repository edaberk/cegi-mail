import { EventEmitter } from "events";

export class MailEvent {
    static mailEvent;

    constructor() {
        this.eventEmitter = new EventEmitter();
        this.mail_sent = 'mail_sent';
        
    }

    static getMailEvent() {
        if (MailEvent.mailEvent === undefined) {
            MailEvent.mailEvent = new MailEvent();
        }

        return MailEvent.mailEvent;
    }

    addListener(listenerFunc) {
        this.eventEmitter.addListener(this.mail_sent, listenerFunc);
    }

    removeListener(listenerFunc) {
        this.eventEmitter.removeListener(this.mail_sent, listenerFunc);
    }


    emitMail(){
        this.eventEmitter.emit(this.mail_sent);
    }
};

const asd = () => {
    console.log(`func 1`)
}

const sdf = () => {
    console.log(`func 2`)
}

let mailEventObj1 = MailEvent.getMailEvent();
mailEventObj1.addListener(asd);
mailEventObj1.addListener(sdf);

//mailEventObj1.addListener(OutGoingMails.onMailSent());

//mailEventObj1.emitMail();