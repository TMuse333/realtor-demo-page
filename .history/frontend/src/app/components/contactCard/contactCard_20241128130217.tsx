import Image from "next/image";
import Link from "next/link";
import React from "react";



interface Props {
    src:string,
    alt:string,
    name:string,
    title:string
    description:string,
    quote:string
    phone:string,
    email:string,
    socials:{
        src:string,
        destination:string,
        alt:string
    }[]
}


const ContactCard:React.FC<Props> = ({
    src,alt,name,description,
    phone,email,socials,title,quote
}) => {


    return (
        <section className="mx-auto flex flex-col">
            <section className="text-center">
                <h3 className="mb-2">{name}</h3>
                <h4 className="mb-2">{title}</h4>
                <p className="mb-2">{quote}</p>
            </section>
            <section className="">
                <Image
                src={src}
                alt={alt}
                className='w-[70vw]
                object-contain mx-auto
                max-w-[200px] hax-h-[250px]'
                width={600}
                height={1300}
                />
            </section>
            <section className="text-center">
                <h3 className="mb-2">Contact Information</h3>
                <p className="mb-2">{phone}</p>
                <p className="mb-2">{email}</p>
                <ul className="flex items-center w-full bg-red-200">
                    {socials.map((social,index)=>(
                        <li
                        key={index}
                        >
                            <Image
                            src={social.src}
                            alt={social.alt}
                            className='w-[100px]
                            object-contain'
                            width={600}
                            height={1300}
                            />
                            <Link
                            href={social.destination}
                            />
                        </li>
                    ))}
                </ul>
            </section>

        </section>
    )
}

export default ContactCard