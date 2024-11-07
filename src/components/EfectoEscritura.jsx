import React, { useEffect, useState } from "react";

    const EfectoEscritura = () => {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const phrases = ["Hola ! soy Agustin", "Bienvenido a mi web"]; // Los textos que se van a escribir y borrar

    useEffect(() => {
        const handleTyping = () => {
        const current = loopNum % phrases.length; // Alterna entre las frases
        const fullText = phrases[current];

        if (isDeleting) {
            setText((prevText) => fullText.substring(0, prevText.length - 1)); // Borra el texto
            setTypingSpeed(100); // Velocidad de borrado
        } else {
            setText((prevText) => fullText.substring(0, prevText.length + 1)); // Escribe el texto
            setTypingSpeed(100); // Velocidad de escritura
        }

        // Cuando la frase está completamente escrita
        if (!isDeleting && text === fullText) {
            setTimeout(() => setIsDeleting(true), 1000); // Pausa antes de borrar
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setLoopNum((prevLoopNum) => prevLoopNum + 1); // Cambia a la siguiente frase
        }
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [text, isDeleting, typingSpeed, loopNum, phrases]);

    return (
        <p class="text-white text-3xl md:text-4xl lg:text-5xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-1 items-center">{text}</p> // Usa la clase que ya tienes
    );
    };

export default EfectoEscritura;