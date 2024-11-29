import React from "react";



interface Props {
    src:string,
    alt:string,
    name:string,
    title,
    description:string,
    phone:string,
    email:string,
    insta?:string,
    linkedin?:string
    facebook:string
}


const ContactCard:React.FC<Props> = ({
    src,alt,name,description,
    phone,email,insta,linkedin,
    facebook
}) => {


    return (
        <section className="mx-auto flex flex-col">
            <section>
                <h3>{name}</h3>
            </section>

        </section>
    )
}

export default ContactCard