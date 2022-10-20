import { Close } from '@mui/icons-material';
import { Box, IconButton, SwipeableDrawer } from '@mui/material';
import Container from 'layout/container';
import Responsive from 'layout/responsive';
import Text from 'layout/text';
import { FC, useState } from 'react';
import items from './menuItems';
import { Button, CodeIconLink, HeaderInner, Link, MenuIcon, SwipeableBody, Wrapper } from './styled';

const Header: FC = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpen = () => setMenuOpen(true);
  const handleClose = () => setMenuOpen(false);

  return (
    <Wrapper>
      <Container>
        <HeaderInner>
          <Responsive rule="min-width:501px">
            {items.map((item) => (
              <Link smooth to={item.path} key={item.label}>
                <Button>
                  <Text>{item.label}</Text>
                </Button>
              </Link>
            ))}
          </Responsive>
          <Responsive rule="max-width:500px">
            {!isMenuOpen && (
              <IconButton onClick={handleOpen}>
                <MenuIcon />
                <Text size=".7em">Menu</Text>
              </IconButton>
            )}
            {isMenuOpen && (
              <IconButton onClick={handleClose}>
                <MenuIcon as={Close} />
                <Text size=".7em">Close</Text>
              </IconButton>
            )}
            <SwipeableDrawer open={isMenuOpen} onClose={handleClose} onOpen={handleOpen} style={{ zIndex: 0 }}>
              <SwipeableBody>
                {items.map((item) => (
                  <Link to={item.path} key={item.label}>
                    <Box padding=".5em 0em" onClick={handleClose}>
                      <Button>
                        <CodeIconLink />
                        <Text size="1.1em">{item.label}</Text>
                      </Button>
                    </Box>
                  </Link>
                ))}
              </SwipeableBody>
            </SwipeableDrawer>
          </Responsive>
        </HeaderInner>
      </Container>
    </Wrapper>
  );
};

export default Header;
