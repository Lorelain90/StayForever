import Nav from "../components/Nav";
import HeroImg from "../components/heroimage";
import Main from "./catalogmain";
import Detalle from './detalle';

export default function Home() {
  return (
    <div className="home-pg">
      <Nav/>
      <HeroImg/>
      <Main/>
      <Detalle/>
    </div>
  );
}
