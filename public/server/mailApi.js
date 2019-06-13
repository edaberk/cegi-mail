import { MailEvent } from "../emitter/singleton_pattern"
import { ObserverPattern } from "../emitter/observerPattern"
const mailList = [
    {
        text: "Primary0",
        receiver: "eda@gmail.com",
        subject: "Test1",
        id: 1000,
        messageNumber: 10,
        senderId: 12345,
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false,
        isStared: false,
        starButtonLabel: "Unlike",
        mailType: "primary",
        isDraft: false
    },
    {
        text: "Primary1",
        receiver: "eda@gmail.com",
        subject: "Test2",
        id: 1001,
        messageNumber: 11,
        senderId: 1234,
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false,
        isStared: false,
        starButtonLabel: "Unlike",
        mailType: "primary",
        isDraft: false
    },
    {
        text: "Social",
        receiver: "edayildirm@gmail.com",
        subject: "Test3",
        id: 1002,
        messageNumber: 12,
        senderId: 12345,
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false,
        isStared: false,
        starButtonLabel: "Unlike",
        mailType: "social",
        isDraft: false
    },
    {
        text: "Promotions",
        receiver: "edaberk@gmail.com",
        subject: "Test4",
        id: 1003,
        messageNumber: 13,
        senderId: 12345,
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false,
        isStared: false,
        starButtonLabel: "Unlike",
        mailType: "promotions",
        isDraft: false
    }
];

export default class MailApi {
    constructor() {
        this.mailsKey = "mails"
        if (localStorage.getItem(this.mailsKey) === undefined || localStorage.getItem(this.mailsKey) === null) {
            this.setMailList(mailList);
            console.log(mailList)
        } else {
            this.getMailList()
        }
        this.observerPattern = new ObserverPattern.getMailEvent();
        this.mailEvent = MailEvent.getMailEvent();

    }

    setStar = (isStared, mailId) => {
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].id == mailId) {
                mailList[i].isStared = isStared;
            }
        }
        this.setMailList(mailList);
        
    }

    getMailList = () => {
        let mailList = JSON.parse(localStorage.getItem(this.mailsKey))
        return mailList;
    }

    setMailList = mailList => {
        let mailListStr = JSON.stringify(mailList)
        localStorage.setItem(this.mailsKey, mailListStr);
    }

    addMail = mail => {
        let receiverLength = mail.receiver.length;
        let mailList = this.getMailList();
        if (mail.receiver.includes("@gmail.com") && mail.text.length > 0) {
            mailList.push(mail)
        }
        this.setMailList(mailList)
        MailEvent.mailEvent.emitMail("mail_sent");
        //this.observerPattern.emitterList();

    }
    addDraft = mail => {
        let mailList = this.getMailList();
        if (mail.text.length > 0) {
            mailList.push(mail)
        }
        this.setMailList(mailList)
        MailEvent.mailEvent.emitMail("mail_sent")
        //this.observerPattern.emitterList();
    }

    allMailList = () => {
        let allMails = this.getMailList();
        return allMails

    }

    getIncomingMailList = () => {
        let incomingMailList = []
        let incomingMails = this.getMailList();
        for (let i = 0; i < incomingMails.length; i++) {
            if (incomingMails[i].senderId == 1234) {
                incomingMailList.push(incomingMails[i]);
            }
        }
        return incomingMailList
    }

    isOutgoing = () => {
        let outGoingList = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].isOutgoing == true && mailList[i].isDraft == false) {
                outGoingList.push(mailList[i]);
            }
        }
        return outGoingList
    }

    favMailList = () => {
        let favList = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].isStared == true) {
                favList.push(mailList[i]);
            }
        }

        return favList
    }

    willBeDeletedMails = (isTrash, mailId) => {
        let mailList = this.getMailList();
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].id == mailId) {
                mailList.splice(i, 1)
            }
        }
        return this.setMailList(mailList);
    }

    checkPrimary = () => {
        let primaryList = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].mailType == "primary") {
                primaryList.push(mailList[i]);
            }
        }
        return primaryList;
    }

    checkSocial = () => {
        let socialList = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].mailType == "social") {
                socialList.push(mailList[i]);
            }
        }
        return socialList;
    }

    checkPromotions = () => {
        let promotionsList = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].mailType == "promotions") {
                promotionsList.push(mailList[i]);
            }
        }
        return promotionsList;
    }

    getId = idNumber => {
        let matchingObj = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].id == idNumber) {
                matchingObj.push(mailList[i]);
            }
        }
        this.mailEvent.eventEmitter.emit("onclick", idNumber, matchingObj);
        return matchingObj;
    }

    draftMailList = () => {
        let draftMails = []
        let mailList = this.getMailList();
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].isDraft == true) {
                draftMails.push(mailList[i]);
            }
        }
        return draftMails;
    }

    receiverCheck = () => {
        let outGoingList = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].receiver.includes("@gmail.com")) {
                outGoingList.push(mailList[i])
            }
        }
        return outGoingList
    }

    /*getMailItem = mailId => {
        let matchingObj = []
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].id == mailId) {
                matchingObj.push(mailList[i]);
            }
        }
        this.mailEvent.eventEmitter.emit("onclick", mailId, matchingObj);
        return matchingObj;
    }*/

    getMailItem = mailId => {
        let matchingObj = []
        let messageNumb="";
        let mailList = this.getMailList()
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].id == mailId) {
                messageNumb = mailList[i].messageNumber
            }
        }

        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].messageNumber == messageNumb) {
                matchingObj.push(mailList[i]);
            }
        }

        this.mailEvent.eventEmitter.emit("onclick", mailId, matchingObj);
        return matchingObj;
    }

    removeDraftMail = mail => {
        let mailList = this.getMailList();
        for (let i = 0; i < mailList.length; i++) {
            if (mailList[i].id == mail[0].id) {
                console.log(mailList[i])
                mailList.splice(i, 1)
            }
        }
        return this.setMailList(mailList);
    }

    searchList = (text) => {
        let mailList = this.getMailList();
        let mails = []
        for (let i = 0; i < mailList.length; i++) {
            if(mailList[i].text.includes(text) || mailList[i].subject.includes(text) || mailList[i].receiver.includes(text) ){
                console.log(mailList[i]);
                mails.push(mailList[i]);
                this.mailEvent.eventEmitter.emit("search" , mails);
            }
        }
        return mails;
    }
}
