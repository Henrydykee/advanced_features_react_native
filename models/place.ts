class Place {
    title: string;
    imageUri: string;
    address: string;
    id : string;
    location: { lat: number; lng: number };

    constructor(
        title: string,
        imageUri: string,
        // id: string,  
        address: string,
        location: { lat: number; lng: number }
    ) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
        this.id =  Date.now().toString() + Math.random().toString();
    }
}