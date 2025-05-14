import GeradorSection from "./components/GeradorSection";

export default function Home() {
  return (
  <main className="mr-auto ml-auto">
      <div className="mt-16">
        <GeradorSection></GeradorSection>
      </div>
      <div className="mt-12 p-4">
        <h2 className="text-3xl text-blue-500">Como utilizar a ferramenta gerador de dados falsos (Mocks)</h2>
        <p className="mt-4 text-base">
          Para utilizar o Gerador de Dados Falsos (Mocks), comece definindo os campos necessários para sua simulação. Cada campo requer um nome, como "Id" ou "Email", e um tipo correspondente, como "Número Inteiro" ou "Email". Você pode adicionar quantos campos forem necessários clicando no botão dedicado para essa função.
          Em seguida, especifique a quantidade de registros desejada no campo indicado como "Número de Linhas". Por exemplo, se precisar de 50 entradas fictícias, basta inserir esse valor.
          Por fim, clique no botão "Obter dados" para gerar as informações com base nas configurações definidas e baixar o arquivo com os dados. Os resultados serão inseridos em um arquivo do tipo Json.
        </p>
        <h2 className="text-3xl text-blue-500 mt-8">Por que um gerador de mocks é útil?</h2>
        <p className="mt-4 text-base">
          Um gerador de mocks acelera o desenvolvimento ao criar dados realistas para testes e demonstrações, revelando falhas antecipadamente. Ele substitui informações sensíveis por alternativas seguras, 
          cobre casos variados (como caracteres especiais) e economiza horas de trabalho manual, resultando em sistemas mais robustos com menos risco.
        </p>
        <h2 className="text-3xl text-blue-500 mt-8">Por que usar GeraTudo?</h2>
        <p className="mt-4 text-base">
          Apesar de já existirem sites que geram dados falsos, eles geralmente não têm a finalidade de gerar grandes quantidades ou não são destinados ao público brasileiro, com dados que não refletem os nomes comuns do Brasil, 
          números de telefone etc. Além disso, nem todas as pessoas são programadoras para usar soluções com que exijam programação. Com o <strong>GeraTudo</strong>, você consegue ter acesso a grandes quantidades de dados falsos com a cara 
          brasileira e sem a necessidade de programação.
        </p>
        <h2 className="text-3xl text-blue-500 mt-8">Por que dados realistas são importantes?</h2>
        <p className="mt-4 text-base">
          Dados realistas elevam a qualidade dos seus testes e demonstrações. Quando as informações simulam cenários reais, os testadores trabalham com maior eficácia e as apresentações se tornam mais claras e convincentes. 
          Essa abordagem revela problemas reais - como tratamento de acentos, caracteres especiais e formatos variados - que passariam despercebidos com dados simplificados. O resultado é um sistema mais robusto, 
          preparado para enfrentar os desafios do ambiente de produção desde o primeiro dia.
        </p>
      </div>
  </main>
  );
}
