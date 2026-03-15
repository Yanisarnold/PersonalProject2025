export type Task = {
  id: number;
  name: string;
  urgency?: UrgencyOfTask;
  isCompleted: boolean;
  taskCreatedAt: string;
  taskStatus?: status;
};

export type UrgencyOfTask = (typeof urgencyOfTask)[keyof typeof urgencyOfTask];

export const urgencyOfTask = {
  Low: 'Low',
  Medium: 'Medium',
  Urgent: 'Urgent',
} as const;

export enum status {
  IN_PROGRESS = 'INPROGRESS',
  DONE = 'DONE',
}
export let nextId = 1;
export const isCompleted = false;
export const currentId = nextId++;
