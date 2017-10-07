import { Subject, Observable } from 'rxjs';

export class Message  {
  constructor(public author: string, public text: string) {}

  print(): string {
    return `${this.author}: ${this.text}`
  }
}

export const sentMessage$: Subject<Message> = new Subject();
export const incommingMessage$: Subject<Message> = new Subject();

export const newMessage$: Observable<Message> =
  sentMessage$.merge(incommingMessage$);

export function send(message: string) {
  sentMessage$.next(new Message('user', message));
}
