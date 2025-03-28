// importing fron next
import Image from "next/image";

export default function loading() {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
                <Image
                    src={'/assets/loading.gif'}
                    alt="loading..."
                    width={100}
                    height={100}
                    className="w-[100px]"
                />
            </div>
        </>
    );
}