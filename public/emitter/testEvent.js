import MailApi from "../server/mailApi"
const mailList = []
export class TestEvent {
    static mailEvent;
    
    constructor() {

    }

    static getMailEvent() {
        let newMail = false;
        if (TestEvent.mailEvent === undefined) {
            TestEvent.mailEvent = new TestEvent();
        }
        return TestEvent.mailEvent;
    }

    testFunc() {
    }

    addListener(func) {
        mailList.push(func)
    }

    emitterList(emit) {
        for (let i = 0; i < mailList.length; i++) {
            mailList[i]();
        }
    }
}

let test1 = new TestEvent();
test1.testFunc()