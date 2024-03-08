import Image from 'next/image'
import picture from '../images/foto.png'
import oka from '../images/oka-house.png'
import san from '../images/san-satri-vet.png'
import broopz from '../images/broopz-school.png'
import biscoito from '../images/biscoito.png'
import baciodilatte from '../images/baciodilatte.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import telegrama from '../images/telegrama.png'
import whatsapp from '../images/whatsapp.png'

function Home() {
    return <div className="container mx-auto">
                <div className="md:grid md:grid-cols-3 gap-4 auto-cols-max">
                        <div className="grid w-full h-screen p-8 bg-neutral-100 md:sticky left-0 top-0">
                            <div className="place-self-center">
                                <Image 
                                    src={picture}
                                    width={223}
                                    height={223}
                                    className="rounded-full"
                                />

                            </div>
                            <div>

                                <p className="font-serif text-3xl text-indigo-900 text-center pt-3.5">
                                    Lucas Ranesson
                                </p>

                                <p className="font-sans text-sm text-center pb-3.5">
                                    <span className="text-sky-500">Web Developer</span> in São Paulo - SP
                                </p>

                            </div>

                            <div>
                                <ul className="list-none text-center p-3.5">
                                    <li><a href="" className="text-decoration-none">My Portfolio</a></li>
                                </ul>
                            </div>

                            <div className="place-self-center">
                                <ul className="grid grid-cols-4 gap-4">
                                    <li>
                                        <a href="https://github.com/lucasranesson/" target="_blank">
                                            <Image
                                                src={github}
                                                className="rounded w-10"
                                            />  
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/lucasranesson/" target="_blank">
                                            <Image
                                                src={linkedin}
                                                className="rounded w-10"
                                            />  
                                        </a>

                                    </li>
                                    <li>
                                        <a href="mailto:lucasranesson@hotmail.com?subject=My Portfolio" target="_blank">
                                            <Image
                                                src={telegrama}
                                                className="rounded w-10"
                                            />  
                                        </a>

                                    </li>
                                    <li>
                                        <a href="https://api.whatsapp.com/send?phone=5511980145567&text=Vim%20da%20p%C3%A1gina%20do%20seu%20portfolio%20e%20..." target="_blank">
                                            <Image
                                                src={whatsapp}
                                                className="rounded w-10"
                                            />  
                                        </a>

                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="md:col-span-2 w-full relative px-5 md:px-0">
                            <p className="font-sans pt-3.5">MY WORK</p>
                            <p className="font-serif text-4xl tracking-widest pb-8">RECENT WORK </p>
                            
                            <div class="grid md:grid-cols-2 gap-6 ">
                                <div>
                                    <a href="https://okahauss.com.br/" target="_blank">
                                        <Image
                                            src={oka}
                                            className="rounded w-full"
                                        />  
                                    </a>
                                </div>
                                <div>
                                    <a href="https://sansatri.com.br/" target="_blank">
                                        <Image
                                            src={san}
                                            className="rounded w-full"
                                        />  
                                    </a>
                                </div>
                                <div>
                                    <a href="https://broopzschool.com.br/" target="_blank">
                                        <Image
                                            src={broopz}
                                            className="rounded w-full"
                                        />  
                                    </a>
                                </div>
                                <div>
                                    <a href="https://biscoito.cc/" target="_blank">
                                        <Image
                                            src={biscoito}
                                            className="rounded w-full"
                                        />  
                                    </a>
                                </div>
                                <div>
                                    <a href="https://baciodilatte.us/" target="_blank">
                                        <Image
                                            src={baciodilatte}
                                            className="rounded w-full"
                                        />  
                                    </a>
                                </div>
                                <div>
                                    <p className="text-center font-serif text- mb-5 md:mt-10 md:mb-0">...</p>

                                </div>
                            </div>

                        </div>

                    </div>
            </div>
}

export default Home