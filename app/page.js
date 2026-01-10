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
        <Title size="text-5xl">CV</Title>
        <div className="w-[75%] flex flex-col space-y-5 items-center">
          <p>
            Cupidatat eiusmod ad quis elit ullamco tempor ea velit do
            consectetur eiusmod nulla minim veniam. Nulla proident id irure
            commodo velit mollit Lorem. Ea consectetur Lorem non qui nisi et
            nulla dolore aute. Veniam nisi eiusmod elit commodo reprehenderit
            voluptate sunt. Adipisicing incididunt magna eiusmod magna sunt ex
            magna deserunt. Sint reprehenderit eu cillum ipsum ullamco nostrud
            non reprehenderit ex officia qui quis. Mollit incididunt aliquip
            reprehenderit nostrud exercitation culpa excepteur consequat duis
            dolor laborum labore deserunt. 
            
            Veniam consectetur laborum ullamco
            consectetur in labore irure. Aute ipsum ipsum nulla nisi. Magna
            nostrud occaecat irure cillum magna aute sit minim dolor dolore
            laborum ipsum nostrud in. Incididunt magna ut in exercitation quis
            dolore duis reprehenderit tempor cupidatat cupidatat dolor. Velit do
            ipsum velit esse anim irure ad adipisicing ea enim sunt fugiat amet.
            Cupidatat minim aliquip aute nostrud incididunt Lorem culpa
            voluptate ex aliqua mollit. 
            
            Anim incididunt deserunt labore sunt ad
            irure ullamco irure qui occaecat voluptate incididunt fugiat ut. Est
            labore id cupidatat exercitation. Aliquip esse et laborum do tempor
            duis velit qui occaecat nostrud labore enim. Anim et officia ad esse
            esse ex enim culpa enim excepteur esse. Commodo Lorem adipisicing
            consequat reprehenderit. Aliqua esse aute minim minim sunt veniam
            exercitation consequat velit. Fugiat sit anim excepteur consectetur
            qui adipisicing quis labore excepteur ipsum. Tempor pariatur mollit
            elit non eiusmod culpa pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}
