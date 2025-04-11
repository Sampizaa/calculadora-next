"use client";

import { useState } from "react";
import Botoes from "@/app/components/Botoes";
import Display from "@/app/components/Display";
import "./styles/styles.css"; // Importação do CSS

export default function Page() {
    const [valorDisplay, setValorDisplay] = useState("");

    const handleClick = (valor) => {
        if (valor === "=") {
            try {
                setValorDisplay(eval(valorDisplay));
            } catch {
                setValorDisplay("Erro");
            }
        } else if (valor === "C") {
            setValorDisplay("");
        } else {
            setValorDisplay(valorDisplay + valor);
        }
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <Display valorDisplay={valorDisplay} />

            <div className="botoes">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                    <Botoes key={num} valor={num} onClick={() => handleClick(num)} />
                ))}

                {["+", "-", "*", "/"].map((op) => (
                    <Botoes key={op} valor={op} onClick={() => handleClick(op)} className="operacao" />
                ))}

                <Botoes valor="=" onClick={() => handleClick("=")} className="igual" />
                <Botoes valor="C" onClick={() => handleClick("C")} />
            </div>
        </div>
    );
}
