import Nav from "../components/Nav";
import Catalog from "../components/catalog";
import HeroImg from "../components/heroimage";


export default function Home() {
  return (
    <div className="home-pg">
      <Nav/>
      <HeroImg/>
      <Catalog/>
    </div>
  );
}
