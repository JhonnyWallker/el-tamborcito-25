import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        Nosotros
      </h1>
      <div className="text-center">
        <p className="text-lg">Desde Corrientes</p>
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          El Tamborcito es un espacio digital dedicado a contar y celebrar la vida en la provincia de Corrientes. Nos mueve el deseo de difundir lo que nos hace únicos: nuestra cultura, nuestras tradiciones, nuestros eventos y la actualidad que define el pulso cotidiano de nuestra tierra.
        </p>
        <p>
          Desde fiestas populares hasta noticias locales, pasando por expresiones artísticas, historias de la gente y costumbres que nos representan, queremos ser un reflejo auténtico de lo que ocurre en cada rincón correntino.

          Creemos en una comunicación cercana, con identidad, que valore nuestras raíces y las proyecte al mundo. Si algo suena en Corrientes, lo vas a encontrar acá
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1747337756/el-tamborcito-2000px_upzxt9.png"
            alt="Powered by Vercel"
            className="w-80 dark:hidden"
          />
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1747340414/el-tamborcito-b-2000px_ymllbu.png"
            alt="Powered by Vercel"
            className="hidden w-80 dark:block"
          />
        </div>
      </div>
    </Container>
  );
}
