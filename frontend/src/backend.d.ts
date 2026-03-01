import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    installationType: string;
    name: string;
    email: string;
    message: string;
    address: string;
    phoneNumber: string;
}
export interface backendInterface {
    deleteLead(email: string): Promise<void>;
    getAllLeadsSortedByName(): Promise<Array<Lead>>;
    getLead(email: string): Promise<Lead>;
    submitLead(name: string, phoneNumber: string, email: string, address: string, installationType: string, message: string): Promise<void>;
}
