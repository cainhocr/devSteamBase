import GameCard from "../components/cards/gameCard/gameCard";
import SaleCard from "../components/cards/saleCard/saleCard";
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";
import "./App.css";

import { cartState } from "../atoms/cart";
import { useRecoilState } from "recoil";

const App = () => {
  const [cart, setCart] = useRecoilState(cartState);

  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };

  //console.log(cart);

  return (
    <div>
      <Nav />

      <Container>
        <Subtitle>promoções</Subtitle>
        <div className="saleContainer">
          <SaleCard
            title={"league-of-legends"}
            fullPrice={199.9}
            discount={30}
            onAdd={() =>
              handleAddProduct({
                name: "league-of-legends",
                price: 199.99 - 199.99 * 0.3,
                img: "league-of-legends",
              })
            }
          />
          <SaleCard
            title={"dota-2"}
            fullPrice={309.9}
            discount={50}
            onAdd={() =>
              handleAddProduct({
                name: "dota-2",
                price: 309.9 - 309.9 * 0.5,
                img: "dota-2",
              })
            }
          />
          <SaleCard
            title={"valorant"}
            fullPrice={290.99}
            discount={40}
            onAdd={() =>
              handleAddProduct({
                name: "valorant",
                price: 290.99 - 290.99 * 0.4,
                img: "valorant",
              })
            }
          />
        </div>
        <div className="gameSession">
          <Subtitle>Outros Jogos</Subtitle>
          <div className="gameContainer">
            <GameCard
              title={"CSGO"}
              info={"Ação, Estratégia e MultiJogador"}
              price={99.9}
            >
              Counter Strike: Global Offensive
            </GameCard>

            <GameCard
              title={"GTA-V"}
              info={"Ação, Apologia e MultiJogador"}
              price={229}
            >
              GTA V
            </GameCard>

            <GameCard
              title={"FIFA23"}
              info={"Esporte e MultiJogador"}
              price={129}
            >
              FIFA23
            </GameCard>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
