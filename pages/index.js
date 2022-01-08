import Wrapper from "../components/wrapper/wrapper";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import {menuTitle} from "../constants/copyright";

export default function Home() {
  return (
      <Wrapper>
          <Header headerTitle={menuTitle}/>
          <Menu className={"wrapper__menu"} />
      </Wrapper>
  )
}
