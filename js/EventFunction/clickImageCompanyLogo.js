document.querySelector("#imageFileInputL").addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const imageUrl = reader.result;
        document.querySelector("#imageL").value = imageUrl;
    });
    reader.readAsDataURL(this.files[0]);
});