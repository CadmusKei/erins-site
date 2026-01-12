import Title from "./Title";

export default function Contact(){
    return(
        <>
            <Title size="text-6xl">Contact</Title>
            <div className="w-[75%] mt-1 flex flex-col p-5 space-y-5 items-center border-2 border-neutral-700 rounded-xl
            shadow-2xl shadow-black">
                <p>Email: erinsalo6@gmail.com</p>
                <p>Phone Number: 079 540 8160</p>
            </div>
        </>
    );
}