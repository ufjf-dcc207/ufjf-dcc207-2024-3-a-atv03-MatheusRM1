import "./Animal.css";

interface AnimalProps {
  icone: string;
  nome: string;
  peso: number;
  extincao: boolean;
}

export default function Animal({ icone, nome, peso, extincao }: AnimalProps) {
  return (
    <div className="animal">
      <div className="icon">{icone}</div>
      <div className="nome">{nome}</div>
      {peso > 0 ? (
        <div className="peso">{peso.toLocaleString()}kg</div>
      ) : (
        <div className="peso">Desconhecido</div>
      )}
      {extincao && <div className="extincao">Em extincao!</div>}
    </div>
  );
}
