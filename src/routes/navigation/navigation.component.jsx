import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { Container, Logo, Navlinks, Links } from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectOpenedCart } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import { signOutStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const openCart = useSelector(selectOpenedCart);
  const dispatch = useDispatch();

  const signOutHandler = dispatch(signOutStart());

  return (
    <>
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
        {openCart && <CartDropdown />}
      </Container>
      <Outlet />
    </>
  );
};

export default Navigation;
