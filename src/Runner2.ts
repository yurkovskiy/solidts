import { Message } from "./Message";
import { EmailMessageSender } from "./EmailMessageSender";
import { NotificationSystem } from "./NotificationSystem";
import { SkypeMessageSender } from "./SkypeMessageSender";

let m = new Message("Hello World!");
let ns = new NotificationSystem(new SkypeMessageSender());
ns.notifyAll(m);