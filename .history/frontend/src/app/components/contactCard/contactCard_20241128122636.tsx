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
            <section>
                <h3>{name}</h3>
                <h4>{title}</h4>
                <p>{quote}</p>
            </section>
            <section className="">
                <Image
                src={src}
                alt={alt}
                className='w-[70vw]
                object-contain mx-auto'
                width={600}
                height={1300}
                />
            </section>
            <section>
                <h3>Contact Information</h3>
                <p>{phone}</p>
                <p>{email}</p>
                <ul className="flex">
                    {socials.map((social,index)=>(
                        <li>
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