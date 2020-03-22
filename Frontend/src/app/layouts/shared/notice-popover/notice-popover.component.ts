import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Pagging } from "@app/core";
interface TabInterface {
  type: string;
  title: string;
  empty?: {
    image?: string;
    text?: string;
  };
  rows: any[];
  map?: Function;
}
@Component({
  selector: "app-notice-popover",
  templateUrl: "./notice-popover.component.html",
  styleUrls: ["./notice-popover.component.less"]
})
export class NoticePopoverComponent implements OnInit {
  @Output() visibleChange = new EventEmitter();
  @Output() action = new EventEmitter();
  @Output() loadMore = new EventEmitter();

  @Input() visible: boolean = false;
  @Input() pagging: Pagging;
  @Input() spinning: boolean = false;
  @Input() trigger: string = "click";
  @Input() innerClass: object = {};

  @Input() tabs: TabInterface[] = [
    {
      type: "notification",
      title: "Notifications",
      empty: {
        image: "/assets/images/notification.svg",
        text: "Notifications"
      },
      rows: []
    },
    {
      type: "messages",
      title: "Messages",
      empty: {
        image: "/assets/images/message.svg",
        text: "Message"
      },
      rows: []
    },
    {
      type: "event",
      title: "Events",
      empty: {
        image: "/assets/images/event.svg",
        text: "Events"
      },
      rows: [],
      map: function(row: any) {
        row["color"] = {
          todo: "magenta",
          processing: "blue",
          urgent: "red",
          doing: "gold"
        }[row.status];
        return row;
      }
    }
  ];
  @Input()
  get data(): any[] {
    return this.tabs.map(tab => tab.rows).reduce((x, y) => x.concat(y));
  }
  set data(rows: any[]) {
    this.tabs.forEach(
      tab =>
        (tab.rows = rows
          .filter(row => row.type == tab.type)
          .map(row => (tab.map ? tab.map(row) : row)))
    );
  }
  ngOnInit() {}
  onAccept(surveySend: any) {
    this.action.emit({
      accept: true,
      surveySend
    });
  }
  onDeny(surveySend: any) {
    this.action.emit({
      accept: false,
      surveySend
    });
  }

  loadMoreNotification() {
    this.loadMore.emit(true);
  }
}
