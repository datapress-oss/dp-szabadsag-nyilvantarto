export enum HolidayStatus {
  selected,
  pending,
  accepted
}

interface Holiday {
  status: HolidayStatus;
  groupId: number;
  from: string;
  to: string;
  days: number;
}

export interface AggregatedLeave {
  name: string;
  holidays: Array<Holiday>;
}
