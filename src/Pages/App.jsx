import { useState } from "react";
import gitlogo from "../assets/GITHUBLOGO.png";
import { Container } from "./styles";
import Input from "../Components/Input/Index";
import ItemRepo from "../Components/ItemRepo";
import Button from "../Components/Button";
import { api } from "../Services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`).catch((err) => {
      console.log(err);
      alert(err.response.data.message);
      return;
    });
    const isExist = repos.find((repo) => repo.id === data.id);
    if (!isExist) {
      setRepos((prev) => [...prev, data]);
      setCurrentRepo("");
      console.log("False");
      return;
    }
    alert("Repository already added");
  };

  const handleRemoveRepo = (repoID) => {
    const indexRepo = repos.findIndex((repo) => repo.id === repoID);
    const  removeArray= [
    ...repos.slice(0, indexRepo),
    ...repos.slice(indexRepo + 1)
  ];
    setRepos(removeArray)
  };
  return (
    <>
      <Container>
        <img src={gitlogo} alt="gitHubLogo" width={72} height={72} />
        <Input
          value={currentRepo}
          onChange={(e) => setCurrentRepo(e.target.value)}
        />
        <Button onClick={handleSearchRepo} />
        {repos.map((repo) => {
          return (
            <ItemRepo repo={repo} onClick={(repo) => handleRemoveRepo(repo)} />
          );
        })}
      </Container>
    </>
  );
}

export default App;
