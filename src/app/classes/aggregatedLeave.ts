interface Holiday {
  status: string;
  groupId: number;
  from: string;
  to: string;
  days: number;
}

export interface AggregatedLeave {
  name: string;
  holiday: Array<Holiday>;
}
