import { Message } from './Message';

export class NoticeBoard {
    showMessage(message:Message) {
        this.display(message.getText());
    }

    private display(str:String) {
        console.info(`*** ${str} ***`);
    }
}