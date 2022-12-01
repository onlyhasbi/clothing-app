import { Fragment, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Container, Logo, Navlinks, Links } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <Container>
        <Logo to="/">
          <CrownLogo className="logo" />
        </Logo>
        <Navlinks>
          <Links to="/shop">SHOP</Links>
          {currentUser ? (
            <Links as="span" onClick={signOutUser}>
              SIGN OUT
            </Links>
          ) : (
            <Links to="/auth">SIGN IN</Links>
          )}

          <CartIcon />
        </Navlinks>
        {isCartOpen && <CartDropdown />}
      </Container>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
