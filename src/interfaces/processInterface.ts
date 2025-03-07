import Process from "../models/Process";
import Step from "../models/Steps";
import User from "../models/User";

export interface ProcessUser{
    user:User;
    process:Process;
}

export interface ProcessInterface{
    id: number; 
    title: string; 
    objective:string;
    endingDate: Date; 
    createDate: Date; 
    lastUpdate: Date; 
    is_active: boolean; 
    priority: string; 
    status: string; 
    steps:Array<Step>;
    users:Array<ProcessUser>
}