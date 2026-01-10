import Title from "./components/Title";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full h-screen">
      <img className="absolute w-full h-full object-cover z-0" src="/image/Space.jpg"></img>
      
      <div className="flex justify-center items-center pb-10 h-[40%] w-full bg-linear-to-t from-neutral-950 to-transparent z-10">
        <Title>Erin Salo</Title>
      </div>
      <div className="flex h-full w-full bg-neutral-950 z-10"></div>


    </div>
  );
}
