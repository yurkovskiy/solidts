import { Message } from "./Message";
import { MessageSender } from "./MessageSender";

export class NotificationSystem {
    constructor(private sender:MessageSender) {  
    }

    notifyAll(message:Message) {
        this.sender.sendMessage(message);
    }
}