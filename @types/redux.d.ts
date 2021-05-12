import { SagaMiddleware, Task } from "@redux-saga/core";
import * as Redux from "redux"

declare module "redux" {
  export interface Store {
    sagaTask: Task 
  }
}
