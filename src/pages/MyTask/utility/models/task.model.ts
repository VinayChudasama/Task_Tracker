import { ReactElement } from "react";

export interface IColumn {
  key: string;
  label: ReactElement | string;
}
export interface ITask {
  [key: string]: any;
  Id: string;
  TaskName: string;
  AssignTo: string;
  Status: string;
  CreatedAt: string;
  Actions: string
}
export interface IBreadcrumbItems {
  title: string;
  href: string;
}
