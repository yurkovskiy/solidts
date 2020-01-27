import { Message } from "./Message";
import { MessageSender } from "./MessageSender";

export class SkypeMessageSender implements MessageSender {
    private sendMessageViaSkype(message:Message):void {
        console.info(`Just sending ${message.getText()} via Skype`);
    }

    sendMessage(message:Message):void {
        this.sendMessageViaSkype(message);
    }
}