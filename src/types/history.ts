export interface HistoryEvent {
  id: string;
  title: string;
  event_date_utc: string;
  details: string;
  links: { article?: string };
}
