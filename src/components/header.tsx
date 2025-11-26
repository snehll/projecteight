// import { Box } from "@mui/material";
// import LogoBox from "./logobox";

// export default function Header() {
//   return (
//     <Box
//       position={"absolute"}
//       top={0}
//       left={0}
//       right={0}
//       zIndex={140}
//       display={"flex"}
//       justifyContent={"space-between"}
//       alignItems={"center"}
//       py={{ xs: 3, md: 3 }}
//       px={{ xs: 3, md: 12 }}>
//
//  </Box>
//   );
// }

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoBox from "./logobox";

import ForwardIcon from "@mui/icons-material/Forward";
import { useState } from "react";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box display={"flex"} alignItems={"center"} gap={0}>
        <LogoBox />
        <Typography variant="h6" sx={{ my: 2 }}>
          QUANTUM
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          px: 3,
          py: 2,
          border: 0,
          elevation: 0,
          background: "rgba(255, 255, 255, 0.12)", // semi-transparent white
          backdropFilter: "blur(10px)", // the real "glass" effect
        }}
        component="nav">
        <Toolbar sx={{ backgroundColor: "transparent" }}>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <LogoBox />
          </Box>
          <Box
            sx={{
              height: "100%",
              p: { xs: 1, md: 1 }, // inner padding
              borderRadius: 300,
              background: "#f2f2f9",
            //   boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
              flexDirection: "column",
              justifyContent: "center",
              gap: 40,
              color: "white", // text stays readable
              zIndex: 10,
              display: { xs: "none", sm: "block" },
            }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#74a8f2",
                  fontSize: 18,
                  fontWeight: "600",
                  px: 3,
                }}>
                {item}
              </Button>
            ))}
            <Button
              sx={{
                height: 65,
                borderRadius: 100,
                fontSize: 16,
                bgcolor: "#74a8f2",
                px: 3,
              }}
              variant="contained"
              endIcon={<ForwardIcon fontSize="large" sx={{ fontSize: 20 }} />}>
              COntact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
