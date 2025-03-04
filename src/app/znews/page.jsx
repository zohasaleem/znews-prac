'use client'

import { useState, useEffect, useRef } from "react";

export default function ZNewsPage(){

    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if(!ref.current?.contains(event.target)){
                setIsOpen(false)
            }
        };

        if(isOpen){
            document.addEventListener("mousedown", handleOutsideClick);
        }
        else{
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return() => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen]);

    return (
        <>
        <div className="flex justify-between items-start gap-40">
            <div className="relative">   
                <div className="grid place-items-center bg-black w-[35px] h-[152px] rounded-br-[20px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src="/images/ZIG-W-VERTICAL.svg" className="p-2" alt="ZIG W" />
                </div>
                
                {/* menus options */}
                <div
                    className={`fixed top-0 left-0 h-70 w-45 bg-black text-white rounded-br-[20px] shadow-lg transform ${
                        isOpen ? "block" : "hidden"
                    } transition-transform duration-300 ease-in-out`}
                >

                </div>
            </div>
            <div className="flex flex-col gap-10 mt-6">               

                <div className="flex justify-between items-center gap-8">
                    <div>
                        <img src="/images/ZIMO NEWS.svg" className="w-[115px]" alt="zimo news" />
                    </div>
                    <div className="text-[11px] uppercase cursor-pointer tracking-widest">Israel/Gaza</div>
                    <div className="text-[11px] uppercase cursor-pointer tracking-widest">Ukraine War</div>
                    <div className="text-[11px] uppercase cursor-pointer tracking-widest">Features</div>
                    <div className="text-[11px] uppercase cursor-pointer tracking-widest">Economy</div>
                    <div className="text-[11px] uppercase cursor-pointer tracking-widest">Video</div>
                    <div className="text-[11px] uppercase cursor-pointer tracking-widest">Sport</div>
                    <div className="text-[11px] uppercase cursor-pointer tracking-widest">Science & Technology</div>
                    <div>
                        <img src="/images/UK FLAG.svg" className="w-[35px]" alt="uk-flag" />
                    </div>
                </div>

                <div className="flex items-center bg-black py-4 px-10 gap-20">
                    <div className="flex gap-3 items-center">
                        <div className="w-[12px] h-[12px] bg-deep-red rounded-full"></div>
                        <h1 className="text-deep-red uppercase tracking-widest">Live Updates</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="uppercase text-stone-50 text-xs tracking-widest font-semibold">UN says 700,000 children displaced in gaza amid deadly israeli attacks</p>
                        <p className="w-[580px] text-stone-50 text-[11px] tracking-widest">UNICEF says children 'forced to leave everything behind' as Israeli bombings continue across the besieged enclave.</p>
                    </div>
                </div>

                <div className="flex justify-between mb-20 gap-20">
                    <div className="w-1/2 relative">
                        <img src="/images/ISRAEL-GAZA-WAR.svg" className="w-full" alt="isreal-gaza-war" />
                        <p className="absolute bottom-5 right-7 text-xs tracking-widest text-white uppercase">israel/gaza</p>
                    </div>
                    <div className="w-1/2 border-2 border-zinc-300 rounded-[20px] py-3 px-4 pr-15">
                        <div className="flex items-center gap-4">
                            <img src="/images/NEWS-ZIG.svg" className="w-[48px]" alt="News-zig" />
                            <p className="uppercase text-md tracking-widest">Most read</p>
                        </div>
                        <p className="uppercase text-[11px] tracking-widest mt-3">UN says 700,000 children displaced in Gaza amid deadly Israeli attacks</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">Russia and US Air strikes attack targets in Syria</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">Israel-Hamas war updates: Palestinians killed in Israeli Attack on Jabalia</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">Indonesians Boycott McDonald's, Starbucks over support for Israel</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">UK's Braverman sacked following pro-palestinian protests comments</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">Anti-Palestinian sentiment rises amid bipartisan US support for Israel</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">What does David Cameron's return to UK politics mean for the middle east?</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">Russia-Ukraine war: List of key events, Day 629</p>
                        <p className="uppercase text-[11px] tracking-widest mt-3">If Gaza was in your city, how much would be destroyed?</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="grid place-items-center bg-black w-[35px] h-[152px] rounded-bl-[20px] cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src="/images/ZIG-W-VERTICAL.svg" className="p-2" alt="ZIG W" />
                </div>

                {/* menus options */}
                <div
                    className={`fixed top-0 right-0 h-70 w-45 bg-black text-white rounded-bl-[20px] shadow-lg transform ${
                        isOpen ? "block" : "hidden"
                    } transition-transform duration-300 ease-in-out`}
                >
                </div>
            </div>
        </div>
        </>
    );
}