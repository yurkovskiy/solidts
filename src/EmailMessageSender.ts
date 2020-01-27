import { Message } from "./Message";
import { MessageSender } from "./MessageSender";

export class EmailMessageSender implements MessageSender {
    private sendMessageViaEmail(message:Message):void {
        console.info(`Just sending ${message.getText()} via email`);
    }

    sendMessage(message:Message):void {
        this.sendMessageViaEmail(message);
    }
}