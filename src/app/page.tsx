import { getServerSideProps } from "@/lib/characters";
import Image from "next/image";

type character = {
  name: string;
  image: string;
  status: string;
};

const page = async () => {
  const getData = await getServerSideProps();

  return (
    <>
      <main className="container mx-auto bg-slate-900 my-10 p-5">
        <h1 className="text-center text-4xl font-bold my-10">Rick and Morty</h1>
        <section className="grid grid-cols-3 gap-4 my-5">
          {getData.props.characters.map((character: character) => (
            <div key={character.name} className="bg-slate-800 p-5 rounded-lg">
              <h2 className="text-xl text-gray-300">
                {character.name}
                <span className="font-bold"> - {character.status}</span>
              </h2>
              <Image
                className="rounded-lg mx-auto my-5"
                src={`${character.image}`}
                alt={character.name}
                width={200}
                height={200}
              />
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default page;
