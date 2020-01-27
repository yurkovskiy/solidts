export class Message {
    private text:String;

    constructor(_text:String) {
        this.text = _text;
    }
    getText():String {
        return this.text;
    }
}