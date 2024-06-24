document.querySelector("#imageFileInputB").addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const imageUrl = reader.result;
        document.querySelector("#Banner").value = imageUrl;
    });
    reader.readAsDataURL(this.files[0]);
});