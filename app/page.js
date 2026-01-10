import Title from "./components/Title";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center w-full h-screen">
      <img
        className="absolute w-full h-full object-cover z-0"
        src="/image/Space.jpg"
      ></img>
      {/* <div
        className="absolute w-full h-full object-cover bg-[#18263e] z-0"
      ></div> */}

      <div className="flex justify-center items-center min-h-[40%] w-full bg-linear-to-t from-[#111111e0] to-transparent z-10">
        <Title size="text-7xl">Erin Salo</Title>
      </div>
      <div className="flex flex-col space-y-5 items-center pt-5 h-screen w-full bg-[#111111e0] z-10">
        <Divider />
        <div className="w-[75%] flex flex-col space-y-5 items-center">
          <img
            className=" w-[75%] aspect-square rounded-full"
            src="/image/erin.jpeg"
          ></img>
          <p className="font-bold">
            Erin Salo is a Physics student at The University of The Western Cape
            (UWC) and a writer. She plans on specialising in the field of
            Astrophysics with a particular interest in Dark Matter.
          </p>
        </div>
        <Divider />
        <Title size="text-6xl">CV</Title>
        <div className="w-[75%] mt-5 flex flex-col space-y-5 items-center">
          <p>
            Cupidatat eiusmod ad quis elit ullamco tempor ea velit do
            consectetur eiusmod nulla minim veniam. Nulla proident id irure
            commodo velit mollit Lorem. Ea consectetur Lorem non qui nisi et
            nulla dolore aute. Veniam nisi eiusmod elit commodo reprehenderit
            voluptate sunt.  
          </p>
          <p>
            Cupidatat eiusmod ad quis elit ullamco tempor ea velit do
            consectetur eiusmod nulla minim veniam. Nulla proident id irure
            commodo velit mollit Lorem. Ea consectetur Lorem non qui nisi et
            nulla dolore aute. Veniam nisi eiusmod elit commodo reprehenderit
            voluptate sunt. Adipisicing incididunt magna eiusmod magna sunt ex
            magna deserunt. 
          </p>
          <p>
            Cupidatat eiusmod ad quis elit ullamco tempor ea velit do
            consectetur eiusmod nulla minim veniam. Nulla proident id irure
            commodo velit mollit Lorem. Ea consectetur Lorem non qui nisi et
            nulla dolore aute. Veniam nisi eiusmod elit commodo reprehenderit
            voluptate sunt. Adipisicing incididunt magna eiusmod magna sunt ex.

          </p>
        </div>
        <Divider />
        <Title size="text-6xl">Contact</Title>
        <div className="w-[75%] mt-3 flex flex-col space-y-5 items-center">
          <p>Email: erinsalo6@gmail.com</p>
          <p>Phone Number: 079 540 8160</p>
        </div>
        <Divider />
      </div>
    </div>
  );
}
