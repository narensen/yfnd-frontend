'use client'
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; 
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Main_Image from '../../public/main.png'



export default function Home() {

  return (
    <main>
      <div className="mt-40 mx-70">
      <h1 className="text-6xl font-mono">Your Friendly<br/><span className="mx-20">Neighborhood Developer</span></h1>
      </div>

      <div className="flex mx-140 mt-10">
       <Link href="/app"><Button className="text-xl p-5 cursor-pointer">Try now</Button></Link> 
        <Button className="mx-40 text-xl p-5 hover:underline decoration-2 underline-offset-4 transition-all duration-300">Login</Button>
      </div>

      <div className="flex flex-col text-center justify-center font-mono w-[800px] h-[300px] mt-50 mx-100">
        <Card><h1 className="text-3xl p-6">
          Build Instant Prototypes</h1>
          <Image alt="Nothing"src={Main_Image}/>
          <ol>
            <li>Powered using GROQ and GEMINI to provide instant generated code solution</li>
            </ol>
            </Card>
      </div>
    </main>
  )
}
