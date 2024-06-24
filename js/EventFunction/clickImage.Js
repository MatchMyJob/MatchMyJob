document.querySelector("#imageFileInput").addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const imageUrl = reader.result;
        document.querySelector("#image").value = imageUrl;
    });
    reader.readAsDataURL(this.files[0]);
});