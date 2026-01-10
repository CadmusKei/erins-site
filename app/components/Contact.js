import Title from "./Title";

export default function Contact(){
    return(
        <>
            <Title size="text-6xl">Contact</Title>
            <div className="w-[75%] mt-3 flex flex-col space-y-5 items-center">
                <p>Email: erinsalo6@gmail.com</p>
                <p>Phone Number: 079 540 8160</p>
            </div>
        </>
    );
}