import { Message } from "./Message";
import { NoticeBoard } from "./NoticeBoard";
import { DateMessage } from "./DateMessage";

let nb = new NoticeBoard();
let me:Message = new Message("Cool Message");
let dme:Message = new DateMessage("Hello World!");
nb.showMessage(me);
nb.showMessage(dme);