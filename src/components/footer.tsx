"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        paddingY: 4,
        marginY: "auto",
        paddingX: { xs: 2, sm: 4, md: 8, lg: 12 },
      }}>
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        // alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        px={{ xs: 4, md: 8 }}
        py={{ xs: 4, md: 8 }}>
        <Box
          width={"25%"}
          gap={{ sx: 2, md: 4 }}
          display={"flex"}
          flexDirection={"column"}>
          <Box height={80} border={1} width={200}></Box>
        </Box>
        <Box flex={1} >
          <Box
            flex={1}
            justifyContent={"flex-end"}
            gap={{ sx: 2, md: 4 }}
            display={"flex"}>
            <Box px={{ xs: 2, md: 4 }} py={{ xs: 2, md: 2 }}>
              <Typography variant="h5" gutterBottom marginBottom={3}>
                Pages
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: 18,
                  padding: 0,
                  margin: 0,
                }}>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Home Page
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Services Page
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Contact Us Page
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Why Us Page
                </li>
              </ul>
            </Box>
            <Box px={{ xs: 2, md: 4 }} py={{ xs: 2, md: 2 }}>
              <Typography variant="h5" gutterBottom marginBottom={3}>
                Our Services
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: 18,
                  padding: 0,
                  margin: 0,
                }}>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Air Transportation
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Heavy Transportation
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Road Transport
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Intermodal Transportation
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Door-to-Door Air Cargo
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Project Transportation
                </li>
                <li
                  className=" hover:underline cursor-pointer"
                  style={{ marginBottom: 6 }}>
                  Full Transportation.
                </li>
              </ul>
            </Box>
            <Box px={{ xs: 2, md: 4 }} py={{ xs: 2, md: 2 }}>
              <Typography variant="h5" gutterBottom marginBottom={3}>
                Legal
              </Typography>
              <ul
                style={{
                  listStyleType: "none",
                  fontSize: 18,
                  padding: 0,
                  margin: 0,
                }}>
                <li
                  className=" hover:underline"
                  style={{ marginBottom: 6, cursor: "pointer" }}>
                  Terms and Conditions
                </li>
                <li
                  className=" hover:underline"
                  style={{ marginBottom: 6, cursor: "pointer" }}>
                  Privacy Policy
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
