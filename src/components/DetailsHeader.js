import React from "react"

export default function Header(){
    return (
       <div className="headings">
            <h1 className="name">Anshul Verma</h1>
            <h3 className="role">Frontend/React Developer</h3>
            <a className="website" 
                href="https://github.com/itsanshulverma">
                @itsanshulverma
            </a>
            <a className="email-btn" 
                href="mailto:itsanshulverma@gmail.com">
                <i className="fas fa-envelope"></i>Email
            </a>
        </div> 
    )
}