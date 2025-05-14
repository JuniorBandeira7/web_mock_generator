"use client"
import { useState } from "react";
import { Button } from "./Button";

export default function GeradorSection() {
    const [campos, setCampos] = useState([{ nome: 'Id', tipo: '' },
        { nome: 'Nome', tipo: 'Nome' }, 
        { nome: 'Email', tipo: 'Email' }, 
        { nome: 'Senha', tipo: 'Senha' }])
    const [quantidade, setQuantidade] = useState<number>(1)

    const adcionarCampo = () => {
        setCampos(prev => [...prev, { nome: '', tipo: '' }])
    }

    const obterDados = () => {
        const texts = document.querySelectorAll<HTMLInputElement>('input[type="text"]')
        const selects = document.querySelectorAll<HTMLSelectElement>('select')

        const values = Array.from(texts).map((input, index) => ({
            name: input.value,
            type: selects[index]?.value || ''
        }))

        return values
    }

    const enviarEBaixar = async () => {
        const mergedField = obterDados()
        console.log(obterDados())
        try {
            await fetch(`/api/generate/${quantidade}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(mergedField)
            }).then(response => response.blob())
                .then(blob => {
                    const link = document.createElement("a");
                    link.href = URL.createObjectURL(blob);
                    link.download = "dados.json";
                    link.click();
                })
        } catch (error) {
            alert(`Erro ao baixar: ${error}`)
        }
    }

    return (
        <>
            <section className="gerador-section bg-gray-800 p-4 rounded-lg">
                <div className="w-full flex mt-4 text-3xl">
                    <h1>Gerador de Dados Falsos</h1>
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <span>Nome do Campo</span>
                    <span className="ml-[75px] span2">Tipo do Campo</span>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    {campos.map((campo, index) => (
                        <div className="flex flex-row gap-4" key={index}>
                            <input type="text" 
                            className="" 
                            value={campo.nome}
                            onChange={(e) => {
                                const novosCampos = [...campos]
                                novosCampos[index].nome = e.target.value
                                setCampos(novosCampos)
                            }}
                            />

                            <select name="type" 
                            id="type" 
                            className="select" 
                            value={campo.tipo}
                            onChange={(e) => {
                                const novosCampos = [...campos]
                                novosCampos[index].tipo = e.target.value
                                setCampos(novosCampos)
                            }}

                            >
                                <option value="Número Inteiro">Número Inteiro</option>
                                <option value="Número">Número</option>
                                <option value="Nome">Nome</option>
                                <option value="Email">Email</option>
                                <option value="Data de nascimento">Data de nascimento</option>
                                <option value="Senha">Senha</option>
                                <option value="Telefone">Telefone</option>
                            </select>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <Button onClick={enviarEBaixar}>Obter dados</Button>
                    <Button onClick={adcionarCampo}>Adicionar Campo</Button>
                </div>
                Quantidade: <input type="number" className="mt-4" name="quantidade" id="quantidade" onChange={(e) => { setQuantidade(e.target.valueAsNumber) }} />
            </section>
        </>
    );
}