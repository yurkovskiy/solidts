import { Message } from "./Message";

export interface MessageSender {
    sendMessage(message:Message):void;
}