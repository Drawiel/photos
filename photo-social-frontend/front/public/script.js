const API_URL = "http://localhost:5000/api/photos";

document.getElementById("uploadForm").addEventListener("submit", async(e) => {
    e.preventDefault();
    const userId = document.getElementById("userId").value;
    const photo = document.getElementById("photo").files[0];

    if (!userId || !photo) {
        alert("Por favor ingrese un ID de usuario y una foto");
        return;
    }

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("photo", photo);
    
    try {
        const response = await fetch(`${API_URL}/upload`,{
            method: "POST",
            body: formData
        });
        const data = await response.json();
        alert(data.message);
        loadPhotos(userId);
    } catch (error) {
        alert("error al cargar la foto");
    }
});

document.getElementById("deleteForm").addEventListener("submit", async(e) => {
    e.preventDefault();
    const photoId = document.getElementById("photoId").value;

    if (!photoId) {
        alert("Por favor ingrese un ID de foto");
        return;
    }

    try {
        deletePhoto(photoId);
    } catch (error) {
        alert("error al eliminar la foto");
    }
});

const loadPhotos = async(userId)=>{
    try{
        const response = await fetch(`${API_URL}/${userId}`);
        const photos = await response.json();
        const gallery = document.getElementById("gallery");
        gallery.innerHTML="";
        photos.forEach(photo => {
            const photoCard = document.createElement("div");
            photoCard.classList.add("photo-card");

            photoCard.innerHTML = `<img src="http://localhost:5000/${photo.imageUrl}" alt="${photo.title}">`;
            gallery.appendChild(photoCard);        
        });
    } catch (error) {
        alert("Error al cargar fotos", error);
    }
}

const deletePhoto = async (photoId, userId) => {
    try {
        await fetch(`${API_URL}/${photoId}`, {method: "DELETE"});
        alert("Foto eliminada con exito");
        loadPhotos(userId);
    } catch (error){
        console.error("Error al eliminar la foto: ", error)
    }
}