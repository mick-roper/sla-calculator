export interface Provider {
    Name: string,
    Services: Service[],
    Regions: string[],
}

export interface Service {
    Name: string,
    Availability: number,
}