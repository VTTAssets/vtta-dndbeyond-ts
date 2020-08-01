interface VTTA {
  notification: VTTANotification;
  hint: Hint;
}

interface VTTANotificationsOptionsHide {
  selector: JQuery;
  event: string;
}

interface VTTANotificationOptions {
  width?: number;
  height?: number;
  element?: JQuery;
  align?: string;
  buttons?: string[];
  hide?: VTTANotificationsOptionsHide;
}

interface VTTANotification {
  hide?: () => void;
  show?: (message: string, timeout?: number) => void;
}

interface VTTAHint {
  hide?: () => void;
  show?: (message: string, options?: VTTANotificationOptions) => void;
}
