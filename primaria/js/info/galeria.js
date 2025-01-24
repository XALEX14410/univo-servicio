const images = [
    { id: "image1", src: "/univo-servicio/primaria/img/galeria/1.webp", description: "Descripción 1", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "image2", src: "/univo-servicio/primaria/img/galeria/2.webp", description: "Descripción 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: "image3", src: "/univo-servicio/primaria/img/galeria/3.webp", description: "Descripción 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: "image4", src: "/univo-servicio/primaria/img/galeria/4.webp", description: "Descripción 4", text: "Lorem ipsum dolor sit amet consectetur." },
    { id: "image5", src: "/univo-servicio/primaria/img/galeria/5.webp", description: "Descripción 5", text: "Lorem ipsum dolor sit amet consectetur." },
    { id: "image6", src: "/univo-servicio/primaria/img/galeria/6.webp", description: "Descripción 6", text: "Lorem ipsum dolor sit amet consectetur." },
    { id: "image7", src: "/univo-servicio/primaria/img/galeria/7.webp", description: "Descripción 7" },
    { id: "image8", src: "/univo-servicio/primaria/img/galeria/8.webp", description: "Descripción 8" },
    { id: "image9", src: "/univo-servicio/primaria/img/galeria/9.webp", description: "Descripción 9" },
    { id: "image10", src: "/univo-servicio/primaria/img/galeria/10.webp", description: "Descripción 10" },
    { id: "image11", src: "/univo-servicio/primaria/img/galeria/11.webp", description: "Descripción 11" },
    { id: "image12", src: "/univo-servicio/primaria/img/galeria/12.webp", description: "Descripción 12" },
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
  