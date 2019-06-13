import MailApi from "../server/mailApi"
const mailList = []
export class ObserverPattern {
    static mailEvent;
    
    constructor() {

    }

    static getMailEvent() {
        let newMail = false;
        if (ObserverPattern.mailEvent === undefined) {
            ObserverPattern.mailEvent = new ObserverPattern();
        }
        return ObserverPattern.mailEvent;
    }

    testFunc() {
    }

    addListener(func) {
        mailList.push(func)
    }

    emitterList() {
        for (let i = 0; i < mailList.length; i++) {
            mailList[i]();
        }
    }
}

let test1 = new ObserverPattern();
test1.testFunc()