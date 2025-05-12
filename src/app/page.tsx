"use client"
import { useState } from "react";

export default function Home() {
  const [campos, setCampos] = useState([{ nome: '', tipo: '' }])
  const [tipos, setTipos] = useState<Array<string>>([])
  const [nomes, setNomes] = useState<Array<string>>([])
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

  const enviarEBaixar =  async () => {
    const mergedField = obterDados()
    console.log(obterDados())
    try {
      const response = await fetch(`/api/generate/${quantidade}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
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
      <div>
        <div className="flex flex-row gap-4">
          <div>Nome do Campo</div>
          <div>Tipo do Campo</div>
        </div>
          {campos.map(() => (
            <div className="flex flex-row gap-4" >
              <input type="text" className="text-black"/>
              <select name="type" id="type" className="text-black select">
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
        <div className="flex flex-row gap-4">
          <input type="number" className="text-black" name="quantidade" id="quantidade" onChange={(e) => {setQuantidade(e.target.valueAsNumber)}}/>
          <button onClick={enviarEBaixar}>Obter dados</button>
          <button onClick={adcionarCampo}>Adicionar Campo</button>
        </div>
      </div>
    </>
  );
}
