import React from "react";



interface Props {
    src:string,
    alt:string,
    name:string,
    title:string
    description:string,
    quote
    phone:string,
    email:string,
    insta?:string,
    linkedin?:string
    facebook:string
}


const ContactCard:React.FC<Props> = ({
    src,alt,name,description,
    phone,email,insta,linkedin,
    facebook,title
}) => {


    return (
        <section className="mx-auto flex flex-col">
            <section>
                <h3>{name}</h3>
                <h4>{title}</h4>
            </section>

        </section>
    )
}

export default ContactCard