import { Component } from "react";
import { Collapse, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";
import { NavBarWithBackground } from "./NavBarStyles";
import { RiHome7Fill } from "react-icons/ri";
import { GiKiwiBird } from "react-icons/gi";
import { PiMountainsFill } from "react-icons/pi";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div>
        <NavBarWithBackground {...this.props} expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <RiHome7Fill size={25} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/birds">
                  <GiKiwiBird size={25} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/climbs">
                  <PiMountainsFill size={25} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </NavBarWithBackground>
      </div>
    );
  }
}

export default NavBar;
