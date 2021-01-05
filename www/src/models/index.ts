export interface Provider {
    Name: string,
    Services: Service[]
}

export interface Service {
    Name: string,
    Region: string,
    Availability: number,
}