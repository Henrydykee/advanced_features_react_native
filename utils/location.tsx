
const GOOGLE_API_KEY = "";

function getMapPreview(latitude: number, longitude: number){
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

    return imagePreviewUrl;
}

export default getMapPreview;