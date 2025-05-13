// Lightbox script
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".lightbox .close");

    document.querySelectorAll(".gallery img").forEach((img) => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
});
