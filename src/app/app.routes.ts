import { Routes } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";

export const routes: Routes = [
    {
        path: '', // <your-domain>/
        component: NoTaskComponent
    },
    {
        path: 'tasks', // <your-domain>/tasks
        component: TaskComponent
    }
];