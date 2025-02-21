import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl mb-4 font-extrabold">
        This this my Home Page
      </h1>
      <p className="py-2">This website create with vite + react router v7 + tailwind css</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        libero, repellendus nostrum ad odio suscipit fugiat dolorum quidem
        perspiciatis? Quasi quae expedita eos veniam accusamus id voluptatem
        officia, quaerat autem?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        libero, repellendus nostrum ad odio suscipit fugiat dolorum quidem
        perspiciatis? Quasi quae expedita eos veniam accusamus id voluptatem
        officia, quaerat autem?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        libero, repellendus nostrum ad odio suscipit fugiat dolorum quidem
        perspiciatis? Quasi quae expedita eos veniam accusamus id voluptatem
        officia, quaerat autem?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        libero, repellendus nostrum ad odio suscipit fugiat dolorum quidem
        perspiciatis? Quasi quae expedita eos veniam accusamus id voluptatem
        officia, quaerat autem?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        libero, repellendus nostrum ad odio suscipit fugiat dolorum quidem
        perspiciatis? Quasi quae expedita eos veniam accusamus id voluptatem
        officia, quaerat autem?
      </p>
    </div>
  );
}
