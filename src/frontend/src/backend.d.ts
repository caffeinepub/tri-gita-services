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
    city: string;
    name: string;
    email: string;
    message: string;
    companyInfo: CompanyInfo;
    phone: string;
    systemSize: string;
}
export interface DepartmentContact {
    name: string;
    description?: string;
    email: string;
    phone: string;
}
export interface CompanyInfo {
    contacts: {
        service: DepartmentContact;
        media: DepartmentContact;
        billing: DepartmentContact;
        sales: DepartmentContact;
    };
    baumgartenBrancheContact: DepartmentContact;
    bayernBrancheContact: DepartmentContact;
    hqContact: DepartmentContact;
    operatingAreas: {
        germany: string;
        outsideEurope: string;
        surroundingCountries: string;
    };
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addLead(lead: Lead): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteAllLeads(): Promise<void>;
    deleteLead(email: string): Promise<void>;
    getAllLeadsSortedByName(): Promise<Array<Lead>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getLead(email: string): Promise<Lead>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitLead(name: string, phone: string, email: string, city: string, systemSize: string, message: string): Promise<void>;
}
