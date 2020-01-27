import { Message } from "./Message";

export class DateMessage extends Message {
    getText():String {
        let currDate = new Date();
        let strDate = `${currDate.getDate()}/${currDate.getMonth() + 1}/${currDate.getFullYear()}`;
        return `${super.getText()} ${strDate}`;
    }

}
