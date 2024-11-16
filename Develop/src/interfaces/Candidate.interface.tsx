// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly id: number;
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly skills: string;
    readonly photo: string;
    readonly resume: string;
    readonly linkedin: string;
    readonly github: string;
    readonly portfolio: string;
    readonly status: string;
    readonly notes: string;
    readonly created_at: string;
    readonly updated_at: string;
}