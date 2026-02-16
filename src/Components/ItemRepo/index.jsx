import { ItemContainer } from "./style";

export default function ItemRepo({repo, onClick}) {
  return (
    <ItemContainer onClick={()=>onClick(repo.id)}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">Ver repositório</a><br />
      <a href="#" className="remover" rel="noreferrer">Remover</a>
      <hr/>
    </ItemContainer>
  )
}