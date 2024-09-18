import { Consts } from "./consts";


export class Socket_Service {

    on_new_message: Function = new Function();
    on_delete_message: Function = new Function();
    socket: any;


    constructor(on_new_message: Function, on_delete_message: Function) {
        this.on_new_message = on_new_message;
        this.on_delete_message = on_delete_message;
    }

    init(chat_id: number) {
        this.socket = io(Consts.HOST, {
        });

        this.socket.emit("join_room", chat_id);

        this.socket.on("new_message", (message: any) => {
            this.on_new_message(message);
        });
        this.socket.on("delete_message", (message: any) => {
            this.on_delete_message(message);
        });
    }

    emit_new_message(message: any) {
        this.socket.emit("new_message", message);
        
    }

    emit_delete_message(message: any) {
        this.socket.emit("delete_message", message);
    }

    disconnect() {
        this.socket.disconnect();
    }

}

declare var io: any;