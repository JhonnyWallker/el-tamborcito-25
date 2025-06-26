import React from "react";

const VideoEmbed = ({ videoUrl, title = "Video externo", width = "100%", height = "400px" }) => {
  // Si no hay URL, mostrar un mensaje
  if (!videoUrl) {
    console.log("No se ha proporcionado una URL de video");
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
        <p className="text-gray-500 dark:text-gray-400">No se ha proporcionado una URL de video válida</p>
      </div>
    );
  }

  // Función para extraer el ID del video y generar la URL de embebido adecuada
  const getEmbedUrl = (url) => {
    console.log("Procesando URL de video:", url);
    
    try {
      // Ya está en formato de embed
      if (url.includes("/embed/")) {
        console.log("URL ya en formato embed:", url);
        return url;
      }

      // Para YouTube
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(youtubeRegex);
        if (match && match[1]) {
          const embedUrl = `https://www.youtube.com/embed/${match[1]}`;
          console.log("URL de YouTube convertida:", embedUrl);
          return embedUrl;
        }
      }
      
      // Para Vimeo
      if (url.includes("vimeo.com")) {
        const vimeoRegex = /vimeo\.com\/(?:.*\/)?(?:videos\/)?([0-9]+)/;
        const match = url.match(vimeoRegex);
        if (match && match[1]) {
          const embedUrl = `https://player.vimeo.com/video/${match[1]}`;
          console.log("URL de Vimeo convertida:", embedUrl);
          return embedUrl;
        }
      }
      
      // Para Facebook
      if (url.includes("facebook.com") || url.includes("fb.watch")) {
        // Intentamos usar la URL directamente en el iframe
        console.log("URL de Facebook detectada, usando directamente");
        return url;
      }
      
      // Si no coincide con ninguna plataforma conocida, devuelve la URL original
      console.log("URL no reconocida, usando directamente:", url);
      return url;
    } catch (error) {
      console.error("Error al procesar la URL del video:", error);
      return url;
    }
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="video-container relative w-full" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
