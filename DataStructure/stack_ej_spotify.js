class StackNode {
    constructor(song) {
        this.song = song;
        this.nextSong = null;
    }
}


class Stack {
    constructor() {
        this.QueueTop = null;
        this.QueueSize = 0;
    }

    push(song) {
        if (this.size === 0) {
            this.QueueTop = new StackNode(song);
        } else {
            const PushedSong = new StackNode(song);
            PushedSong.nextSong = this.QueueTop;
            this.QueueTop = PushedSong;
        }
        this.QueueSize++;
    }
    pop() {
        if (this.size === 0) return null;
        this.QueueTop = this.QueueTop.nextSong;
        this.size--;
    }
    getTop(){
   return this.QueueTop.song;
    }
}


MyPlayList = new Stack()
MyPlayList.push('Fuentes de Ortiz');
console.log(MyPlayList.getTop());
MyPlayList.push('Acurrucar');
console.log(MyPlayList.getTop());
MyPlayList.push('Contenta');
console.log(MyPlayList.getTop());
MyPlayList.push('Karpe Diem');
MyPlayList.pop();
