const images = [
  { id: "image1", src: "/univo-servicio/preparatoria/img/galeria/1.webp", description: "", text: "" },
  { id: "image2", src: "/univo-servicio/preparatoria/img/galeria/2.webp", description: "", text: "" },
  { id: "image3", src: "/univo-servicio/preparatoria/img/galeria/3.webp", description: "", text: "" },
  { id: "image4", src: "/univo-servicio/preparatoria/img/galeria/4.webp", description: "", text: "" },
  { id: "image5", src: "/univo-servicio/preparatoria/img/galeria/5.webp", description: "", text: "" },
  { id: "image6", src: "/univo-servicio/preparatoria/img/galeria/6.webp", description: "", text: "" },
];
  
  // Generar la galería
  const galleryContainer = document.querySelector(".galeria");
  images.forEach((image, index) => {
    const a = document.createElement("a");
    a.href = `#${image.id}`;
    a.setAttribute("data-aos", "flip-up");
    a.setAttribute("data-aos-delay", 200 + index * 50);
  
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.description;
  
    const descriptionDiv = document.createElement("div");
    descriptionDiv.className = "texto-imagen";
    descriptionDiv.textContent = image.description;
  
    a.appendChild(img);
    a.appendChild(descriptionDiv);
  
    if (image.text) {
      const textDiv = document.createElement("div");
      textDiv.className = "texto";
      textDiv.innerHTML = `<p>${image.text}</p>`;
      a.appendChild(textDiv);
    }
  
    galleryContainer.appendChild(a);
  });
  
  // Generar los lightboxes
  const lightboxContainer = document.createElement("div");
  lightboxContainer.className = "lightboxes";
  
  document.body.appendChild(lightboxContainer);
  images.forEach((image) => {
    const article = document.createElement("article");
    article.className = "light-box";
    article.id = image.id;
  
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.description;
  
    const closeLink = document.createElement("a");
    closeLink.href = "#";
    closeLink.className = "close";
    closeLink.textContent = "X";
  
    article.appendChild(img);
    article.appendChild(closeLink);
  
    lightboxContainer.appendChild(article);
  });
  