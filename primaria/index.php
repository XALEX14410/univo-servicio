<?php 
include_once realpath(dirname(__FILE__) . "/components/componentes.php");
$micomponente = new componentes();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primaria Univo</title>
    <link rel="icon" href="img/GEU2030-50.png" type="image/icon">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href='./css/boxicons.min.css' rel='stylesheet'>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"> -->
    <link rel="stylesheet" href="./css/aos.css">
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/all.min.css">
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./font/bootstrap-icons.css">
    <!-- <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.5/font/bootstrap-icons.min.css"> -->
    <link rel="stylesheet" href="./font/bootstrap-icons.min.css">
    <!-- <link rel="stylesheet" href="https://unpkg.com/boxicons/css/boxicons.min.css"> -->
    <link rel="stylesheet" href="./css/boxicons.min.css">
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/carousel/carousel.css">
    <link rel="stylesheet" href="./css/estilos.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/loader.css">
    <link rel="stylesheet" href="./css/conatainer.css">
    <link rel="stylesheet" href="./css/marco.css">
</head>

<body>
    <!-- header -->
    <header class="encabezado" id="encabezado">
        <!-- Loader -->
        <div class="centrado hidden">
            <div class="centrado__icono"></div>
        </div>

        <!-- Contenedor del logo -->
        <div class="logo-container" id="container-logo-mini">
            <img src="./img/logo_primaria.png" alt="Logo escolar" class="logo" id="logo1">
            <img src="./img/GEU2030-50.png" alt="Logo de la Empresa" class="logo" id="logo2">
        </div>

        <!-- Botón de menú para pantallas pequeñas -->
        <button class="nav-toggle" id="nav-toggle">
            <i class="bi bi-list"> </i> <!-- Icono de hamburguesa -->
            <i class="bi bi-x-lg"> </i> <!-- Icono de cierre -->
        </button>

        <!-- Barra de navegación -->
        <nav class="barra-navegacion" id="barra-navegacion">
            <div class="logo-container_max">
                <img src="./img/logo_primaria.png" alt="Logo escolar" class="logo">
                <img src="./img/GEU2030-50.png" alt="Logo de la Empresa" class="logo">
            </div>
            <ul class="nav-list" id="nav_list">


                <li><a href="/univo-servicio/primaria/"><i class="bi bi-house-fill"></i> Inicio</a></li>
                <li>
                    <a href="#"><i class='bx bxs-group'></i> Nosotros
                        <!--  <i class="bi bi-caret-down-fill"></i>--></i></a>
                    <ul class="submenu">
                        <li><a href="/univo-servicio/primaria/nosotros/historia.html">Historia</a></li>
                        <li><a href="/univo-servicio/primaria/nosotros/mision.html">Misión − Visión</a></li>
                        <li><a href="/univo-servicio/primaria/nosotros/objetivos.html">Objetivo</a></li>
                        <li><a href="/univo-servicio/primaria/nosotros/valores.html">Decálogo de Valores</a></li>
                        <li><a href="/univo-servicio/primaria/nosotros/directorio.html">Directorio</a></li>
                        <li><a href="/univo-servicio/primaria/nosotros/galeria.html">Galería</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class='bx bxs-book'></i> Área Académica
                        <!--  <i class="bi bi-caret-down-fill"></i>--></i></i></a>
                    <ul class="submenu">
                        <li><a href="/univo-servicio/primaria/area_academica/plan.html">Plan de Estudios</a></li>
                        <li><a href="/univo-servicio/primaria/area_academica/clubs.html">Club's</a></li>
                        <li><a href="/univo-servicio/primaria/mantenimiento.html">Admisión </a></li>
                    </ul>
                </li>

                <li>
                    <a href="#"><i class='bx bxs-hard-hat'></i> Servicios
                        <!--  <i class="bi bi-caret-down-fill"></i>--></i></i></a>
                    <ul class="submenu">
                        <li>
                            <a href="#">Becas</a>
                            <ul class="submenu_2">
                                <li><a href="/univo-servicio/primaria/becas/Convocatoria Beca Primaria.pdf" target="_blank">Tipos
                                        de Becas</a></li>
                                <li><a href="/univo-servicio/primaria/becas/Convocatoria Beca Primaria.pdf"
                                        target="_blank">Convocatoria</a></li>
                                <!-- <li><a href="http://www2.univo.edu.mx/SISE/REDIRECCIONES/primaria.html"
                                        target="_blank">Trámite y Formatos</a></li> -->
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#"><i class="bi bi-person-circle"></i> Accesos
                        <!--  <i class="bi bi-caret-down-fill"></i>--></i></i></a>
                    <ul class="submenu">
                        <li>
                            <a href="#">Sise <!--  <i class="bi bi-caret-down-fill"></i>--></i></i></a>
                            <ul class="submenu_2">
                                <li><a href="https://sise.univo.edu.mx/WEB2/SISE/WebPrimaria/SisePrimaria/Autenticacion.php"
                                        target="_blank">Alumnos</a></li>
                                <li><a href="https://sise.univo.edu.mx/WEB2/SISE/DocentesPrimaria/Autenticacion.php"
                                        target="_blank">Docentes UniVO</a></li>
                            </ul>
                        </li>
                        <li>
                            <a target="_blank"
                                href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAmgQ&hl=es-419&ifkv=ARpgrqdu_oyirLljRt2jAs9hNjxwoW1B0TxQzvnbT1fRPPCsFtySg7BTKvvnYH782GSqegXSWY0o&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S555486071%3A1726589019011114&ddm=0">Correo
                                <!--  <i class="bi bi-caret-down-fill"></i>--></i></i></a>

                        </li>
                    </ul>
                </li>

                <li><a href="/univo-servicio/primaria/contactos/index.html"><i class="bi bi-telephone-forward-fill"></i>
                        Contacto</a></li>
            </ul>
            <!-- <div class="titulo">
                <div>
                    <i class="bi bi-house-door-fill"></i><p>Inicio</p>
                </div>
            </div> -->
        </nav>

    </header>

    <!-- End header -->

    <section>
        <div class="carousel">
            <div class="carousel-inner">
                <div class="carousel-controles">
                    <button class="carousel-anterior"><i class="bi bi-caret-left-fill"></i></button>
                    <button class="carousel-siguiente"><i class="bi bi-caret-right-fill"></i></button>
                </div>
                <div class="carousel-item active">
                    <img src="./img/carousel/pagina-web-primaria (1).jpg" alt="Imagen 1">
                </div>
                <div class="carousel-item">
                    <img src="./img/carousel/22-1-_Banner-Primaria.jpg" alt="Imagen 2">
                </div>
                <div class="carousel-item">
                    <img src="./img/carousel/Banner-Primaria-2019-2.png" alt="Imagen 3">
                </div>
                <div class="carousel-item">
                    <img src="./img/carousel/Banner-Primaria-2019-3.png" alt="Imagen 3">
                </div>

                <div class="carousel-item">
                    <img src="./img/carousel/Banner-Primaria-2019-4.png" alt="Imagen 3">
                </div>

            </div>
        </div>
    </section>

    <!-- Main  -->
    <!-- <main class="contenido">   -->
        <!-- Sección de quienes somos -->
        <!-- <section id="quienes-somos" class="section">
            <div class="container">
                <h2 data-aos="fade-up" data-aos-delay="200">lorem</h2>
                <p data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam accusamus consequuntur quae cumque. Id, deleniti unde, ad nam cumque nemo quisquam vero iusto
                    aut recusandae delectus quod eveniet totam enim?</p>
                <div class="grid">
                    <div class="hero1" data-aos="fade-up" data-aos-delay="300">


                        <h3><i class="bi bi-facebook"></i> Facebook
                            <div class="image-frame">
                                <img src="./img/image.png" alt="Imagen 1" id="imagen-1">
                                <img src="./img/image.png" alt="Imagen 2" id="imagen-2">
                                <img src="./img/image.png" alt="Imagen 3" id="imagen-3">
                                <img src="./img/image.png" alt="Imagen 4" id="imagen-4">
                            </div>

                    </div>
                </a>
                    <div class="hero2" data-aos="fade-up" data-aos-delay="300">
                        <h3><i class="bi bi-card-image"></i> Galeria

                            <div class="image-frame">
                                <img src="./img/image.png" alt="Imagen 1" id="imagen-1">
                                <img src="./img/image.png" alt="Imagen 2" id="imagen-2">
                            <img src="./img/image.png" alt="Imagen 3" id="imagen-3">
                                <img src="./img/image.png" alt="Imagen 4" id="imagen-4">
                            </div>
                    </div>
                    <div class="hero3" data-aos="fade-up" data-aos-delay="300">
                        <h3><i class="bi bi-pencil-fill"></i> Admisión 
                    </div>
                    <div class="hero4" data-aos="fade-up" data-aos-delay="300">
                        <h3><i class="bi bi-person-vcard-fill"></i> Sise web
                    </div>
                    <div class="hero5" data-aos="fade-up" data-aos-delay="300">
                        <h3><i class="bi bi-people-fill"></i> Club
                    </div>
                    <div class="hero6" data-aos="fade-up" data-aos-delay="300">
                        <h3><i class="bi bi-postcard-fill"></i> Becas
                    </div>
                </div>
            </div>
        </section> -->




    <!-- </main> -->

    <!-- End main -->






    <!-- Footer -->
    <?php $micomponente->footer(); ?>
    <!-- End Footer -->

    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
    <!-- <script src="./js/header.js"></script> -->
    <script src="./js/loader.js"></script>
    <script src="./js/nav-toggle.js"></script>
    <script src="./js/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="./js/aos.js"></script>
    <script src="./js/jquery-3.5.1.slim.min.js"></script>
    <script src="./js/popper.min.js"></script>
    <script src="./js/bosstrap/bootstrap.min.js"></script>
    <script src="./js/carousel/carousel.js"></script>
    <script src="./js/animacion_apple.js"></script>
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./js/scroll.js"></script>
    <!-- <script src="js/bosstrap/bootstrap.bundle.min.js"></script>
    <script src="js/bosstrap/bootstrap.bundle.min.js.map"></script> -->
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</body>

</html>