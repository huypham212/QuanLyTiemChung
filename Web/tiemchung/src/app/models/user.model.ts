export interface User {
    name: string,
    email: string,
    dob: string,
    gender: string,
    idCard: string,
    phone: string,
    address: {
        details: string,
        commune: string,
        city: string,
        province: string
    }
}