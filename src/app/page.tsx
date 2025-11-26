"use client";
import Image from "next/image";
import { Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import StreamIcon from "@mui/icons-material/Stream";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import FlightTakeoffSharpIcon from "@mui/icons-material/FlightTakeoffSharp";
import SensorDoorSharpIcon from "@mui/icons-material/SensorDoorSharp";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Header from "@/components/header";

export function ComboBox() {
  return (
    <Autocomplete
      sx={{ mb: 4 }}
      disablePortal
      options={[
        { label: "Air Transportation", year: 1994 },
        { label: "Heavy Transportation", year: 1972 },
        { label: "Road Transport", year: 2008 },
        { label: "Intermodal Transportation", year: 1994 },
        { label: "Door-to-Door Air Cargo", year: 1993 },
        { label: "Project Transportation", year: 1994 },
        { label: "Full Transportation", year: 1993 },
      ]}
      // sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Choose a Service" />
      )}
    />
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  // textAlign: "center",
  // height: 60,
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export function RowCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Stack>
      <Box>{icon}</Box>
      <Typography
        sx={{ fontSize: 18, marginY: 2 }}
        textTransform={"capitalise"}
        variant="h6"
        gutterBottom
        fontWeight="medium">
        {title}
      </Typography>
      <Typography fontSize={16} margin="auto">
        {description}
      </Typography>
    </Stack>
  );
}

export function RowAndColumnSpacing() {
  const data = [
    {
      id: 1,
      icon: (
        <FlightTakeoffSharpIcon
          sx={{
            verticalAlign: "middle",
            mr: 1,
            color: "#74a8f2",
            fontSize: 80,
          }}
        />
      ),
      title: "Air Transportation",
      description:
        "Ideal for time-sensitive shipments, air freight offers the fastest delivery times and global reach.",
    },
    {
      id: 2,
      icon: (
        <PublicSharpIcon
          sx={{
            verticalAlign: "middle",
            mr: 1,
            color: "#74a8f2",
            fontSize: 80,
          }}
        />
      ),
      title: "Heavy Transportation",
      description:
        " Specialized services for oversized and heavy cargo, ensuring safe and compliant transport solutions.",
    },
    {
      id: 3,
      icon: (
        <DirectionsSubwayIcon
          sx={{
            verticalAlign: "middle",
            mr: 1,
            color: "#74a8f2",
            fontSize: 80,
          }}
        />
      ),
      title: "Road Transport",
      description:
        "Flexible and efficient road freight solutions for domestic and cross-border deliveries.",
    },
    {
      id: 4,
      icon: (
        <FlightTakeoffSharpIcon
          sx={{
            verticalAlign: "middle",
            mr: 1,
            color: "#74a8f2",
            fontSize: 80,
          }}
        />
      ),
      title: "Intermodal Transportation",
      description:
        "Combining multiple modes of transport for optimized cost and efficiency in cargo delivery.",
    },
    {
      id: 5,
      icon: (
        <SensorDoorSharpIcon
          sx={{
            verticalAlign: "middle",
            mr: 1,
            color: "#74a8f2",
            fontSize: 80,
          }}
        />
      ),
      title: "Door-to-Door Air Cargo",
      description:
        "Comprehensive air freight service from the sender's location to the recipient's doorstep.",
    },
    {
      id: 6,
      icon: (
        <FlightTakeoffSharpIcon
          sx={{
            verticalAlign: "middle",
            mr: 1,
            color: "#74a8f2",
            fontSize: 80,
          }}
        />
      ),
      title: "Project Transportation",
      description:
        "Tailored logistics solutions for large-scale and complex projects, ensuring timely delivery and coordination.",
    },
    {
      id: 7,
      icon: (
        <FlightTakeoffSharpIcon
          sx={{
            verticalAlign: "middle",
            mr: 1,
            color: "#74a8f2",
            fontSize: 80,
          }}
        />
      ),
      title: "Full Transportation.",
      description:
        "End-to-end logistics services covering all aspects of cargo transport and management.",
    },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={{ xs: 3, sm: 2, md: 3 }}
        columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
        {data.map((item) => (
          <Grid key={item.id} size={{xs:13,md:6}}>
            <Item>
              <RowCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default function Home() {
  return (
    <Box position={"relative"}>
      <Header />

      {/* Hero Section with Background Image */}
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}>
        {/* Background Image */}
        <Image
          alt="web"
          src="/one.png"
          fill
          quality={75}
          priority
          style={{
            objectFit: "cover", // or 'contain' depending on your needs
          }}
        />

        {/* Overlay Content */}
        <Box
          px={{ xs: 2, md: 8 }}
          sx={{
            position: "relative",
            zIndex: 10,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            // Optional dark overlay for readability
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(10,2,3,0.6)",
              zIndex: -1,
            },
          }}>
          <Typography
            display={{ xs: "none", md: "block" }}
            fontFamily={"roboto"}
            maxWidth={{ md: 1000, xs: "100%" }}
            variant="h1"
            gutterBottom
            fontWeight="bold">
            YOUR EUROPE-ASIA FREIGHT BRIDGE <br />— SEAMLESS, DEPENDABLE, NO
            DELAYS
          </Typography>
          <Typography
            display={{ xs: "block", md: "none" }}
            fontFamily={"roboto"}
            // maxWidth={{ md: 1000, xs: "100%" }}
            variant="h4"
            textAlign={"center"}
            gutterBottom
            fontWeight="bold">
            YOUR EUROPE-ASIA FREIGHT BRIDGE — SEAMLESS, DEPENDABLE, NO DELAYS
          </Typography>
          <Typography
            display={{ xs: "none", md: "block" }}
            variant="h6"
            maxWidth={500}>
            From Poland, we connect manufacturers and industrial buyers across
            Europe and Asia with clear terms, reliable coordination, and supply
            chains that simply work.
          </Typography>
          <Typography
            variant="h6"
            textAlign={"justify"}
            my={4}
            maxWidth={500}
            display={{ xs: "block", md: "none" }}>
            From Poland, we connect manufacturers and industrial buyers across
            Europe and Asia with clear terms, reliable coordination, and supply
            chains that simply work.
          </Typography>
          <Box
            mt={{ xs: 10, md: 0 }}
            flexDirection={"row"}
            display={"flex"}
            alignItems={{ xs: "center", md: "flex-end" }}
            justifyContent={{ xs: "center", md: "flex-end" }}>
            <Button
              sx={{
                height: 80,
                borderRadius: 100,
                fontSize: 24,
                bgcolor: "#74a8f2",
              }}
              className="w-80"
              variant="contained"
              endIcon={<ForwardIcon fontSize="large" sx={{ fontSize: 20 }} />}>
              Get A Quote
            </Button>
          </Box>
        </Box>
      </Box>
      <Box py={{ xs: 2, md: 8 }} px={{ xs: 2, md: 8 }}>
        <Stack>
          <Box
            textAlign={{ xs: "left", md: "center" }}
            gap={3}
            display={"flex"}
            flexDirection={"column"}>
            <Typography
              fontSize={13}
              textTransform={"uppercase"}
              color="#74a8f2"
              variant="h6"
              gutterBottom
              fontWeight="bold">
              About us
              <StreamIcon
                sx={{ verticalAlign: "middle", ml: 1, color: "#74a8f2" }}
              />
            </Typography>
            <Typography
              display={{ xs: "none", md: "block" }}
              variant="h3"
              gutterBottom
              fontWeight="medium">
              Connecting the world, <br />
              One Shipment at a Time.
            </Typography>
            <Typography
              display={{ xs: "block", md: "none" }}
              variant="h4"
              gutterBottom
              fontWeight="medium">
              Connecting the world, One Shipment at a Time.
            </Typography>
            <Typography
              variant="h6"
              maxWidth={{ xs: "100%", md: 800 }}
              margin="auto">
              Based in Poland, our company specializes in international trade
              and distribution of industrial equipment and spare parts. We work
              with trusted manufacturers across Europe, providing full-cycle
              solutions from sourcing and documentation to delivery
              coordination. Our team combines market expertise with a personal
              approach to every project, ensuring efficiency and trust in every
              transaction.
            </Typography>
          </Box>
          <Box
            height={500}
            mx={10}
            my={10}
            display={{ xs: "none", md: "flex" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={0} height={500}>
                <Grid size={{ xs: 6, md: 4 }} height={"100%"}>
                  <Item
                    sx={{
                      position: "relative",
                      height: "99%",
                      borderTopLeftRadius: 200,
                      borderBottomLeftRadius: 200,
                      overflow: "hidden",
                    }}>
                    <Image
                      alt="web"
                      src="/two.png"
                      fill
                      quality={75}
                      priority
                      style={{
                        objectFit: "cover", // or 'contain' depending on your needs
                      }}
                    />
                  </Item>
                </Grid>
                <Grid
                  size={{ xs: 6, md: 8 }}
                  sx={{ position: "relative", left: -90 }}
                  height="100%">
                  <Box
                    color={"black"}
                    sx={{
                      height: "100%",
                      p: { xs: 3, md: 5 }, // inner padding
                      borderRadius: 3,
                      background: "rgba(255, 255, 255, 0.12)", // semi-transparent white
                      backdropFilter: "blur(10px)", // the real "glass" effect
                      WebkitBackdropFilter: "blur(16px)", // Safari support
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 3,
                      color: "white", // text stays readable
                    }}>
                    <Box
                      bgcolor={"black"}
                      p={4}
                      borderRadius={10}
                      textAlign={"left"}>
                      <Box
                        flexDirection={"column"}
                        display={"flex"}
                        alignItems={"flex-start"}
                        justifyContent={"flex-start"}>
                        <Typography
                          fontFamily={"roboto"}
                          variant="h4"
                          component="h5"
                          gutterBottom
                          fontWeight="medium">
                          Driven By Excellence. <br />
                          Powered By People.
                        </Typography>
                        <Button
                          sx={{
                            borderRadius: 100,
                            fontSize: 14,
                            borderColor: "#fff",
                            color: "#fff",
                          }}
                          variant="outlined"
                          endIcon={
                            <ForwardIcon
                              fontSize="small"
                              sx={{ fontSize: 14 }}
                            />
                          }>
                          Get A Quote
                        </Button>
                      </Box>
                      <Box></Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box py={{ xs: 2, md: 8 }} px={{ xs: 2, md: 8 }}>
        <Stack>
          <Box gap={3} display={"flex"} flexDirection={"column"}>
            <Typography
              fontSize={13}
              textTransform={"uppercase"}
              color="#74a8f2"
              variant="h6"
              gutterBottom
              fontWeight="bold">
              Services
              <StreamIcon
                sx={{ verticalAlign: "middle", ml: 1, color: "#74a8f2" }}
              />
            </Typography>
            <Typography
              textTransform={"uppercase"}
              variant="h2"
              fontSize={{ xs: 30, md: 70 }}
              gutterBottom
              fontWeight="medium">
              Comprehensive <br />
              Services
            </Typography>
            <Box>
              <RowAndColumnSpacing />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box py={{ xs: 2, md: 8 }} px={{ xs: 2, md: 8 }}>
        <Stack
          justifyContent={"space-between"}
          direction={{ xs: "column", md: "row" }}>
          <Box
            flex={1}
            position={"relative"}
            overflow={"hidden"}
            borderRadius={12}>
            <Image
              alt="web"
              src="/whyone.png"
              fill
              quality={75}
              priority
              style={{
                objectFit: "cover", // or 'contain' depending on your needs
              }}
            />
          </Box>
          <Box flex={1} px={{ xs: 2, md: 6 }} py={{ xs: 2, md: 10 }}>
            <Typography
              fontSize={13}
              textTransform={"uppercase"}
              color="#74a8f2"
              variant="h6"
              mb={{ xs: 2, md: 4 }}
              gutterBottom
              fontWeight="bold">
              <StreamIcon
                sx={{ verticalAlign: "middle", mr: 1, color: "#74a8f2" }}
              />
              Why choose us ?
            </Typography>
            <Typography
              textTransform={"capitalize"}
              variant="h3"
              fontSize={{xs:30,md:50}}
              gutterBottom
              fontWeight="medium">
              your trusted partner <br />
              in global logistics
            </Typography>
            <Typography
              textTransform={"lowercase"}
              variant="h6"
              fontSize={{ xs: 16, md: 20 }}
              color="grey"
              gutterBottom
              maxWidth={{ xs: "100%", md: "80%" }}
              my={{ xs: 2, md: 8 }}
              fontWeight="500">
              when you choose us, you&rsquo;re opting for a logistics partner
              dedicated to excellence, reliability, and personalized service.
              <br />
              <br />
              our team leverages extensive industry expertise to navigate the
              complexities of global supply chains, ensuring your cargo reaches
              its destination on time and in perfect condition. <br />
              <br />
              we prioritize clear communication, innovative solutions, and a
              customer-centric approach, making us the preferred choice for
              businesses seeking seamless logistics solutions.
              <br />
              <br />
              when you partner with us, you&apos;re not just getting a service
              provider; you&#39;re gaining a committed ally in your
              business&#39;s success.
            </Typography>
            <Box>
              <Typography variant="h6" gutterBottom fontWeight="medium">
                Let&apos;s talk about your next shipment
              </Typography>
              <Button
                sx={{
                  height: 60,
                  borderRadius: 6,
                  fontSize: 16,
                  bgcolor: "#74a8f2",
                }}
                className="w-52"
                variant="contained"
                endIcon={
                  <ForwardIcon fontSize="small" sx={{ fontSize: 14 }} />
                }>
                Get A Quote
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Box py={{ xs: 2, md: 8 }} px={{ xs: 2, md: 8 }}>
        <Stack
          justifyContent={"space-between"}
          direction={{ xs: "column", md: "row" }}>
          <Box
            position={"relative"}
            left={{xs:0,md:180}}
            sx={{
              height: "100%",
              p: { xs: 3, md: 10 }, // inner padding
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.12)", // semi-transparent white
              backdropFilter: "blur(10px)", // the real "glass" effect
              WebkitBackdropFilter: "blur(16px)", // Safari support
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 3,
              color: "white", // text stays readable
              zIndex: 10,
            }}
            flex={1}
            px={6}
            py={{ xs: 2, md: 10 }}>
            <Typography
              fontSize={13}
              textTransform={"uppercase"}
              color="#74a8f2"
              variant="h6"
              mb={{ xs: 2, md: 4 }}
              gutterBottom
              fontWeight="bold">
              <StreamIcon
                sx={{ verticalAlign: "middle", mr: 1, color: "#74a8f2" }}
              />
              Contact Us
            </Typography>
            <Box>
              <Stack mb={4} flexDirection={{ xs: "column", md: "row" }} gap={2}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  fullWidth
                />
              </Stack>
              <ComboBox />
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                sx={{ mb: 4 }}
              />
              <Button
                sx={{
                  height: 60,
                  borderRadius: 6,
                  fontSize: 16,
                  bgcolor: "#74a8f2",
                }}
                className="w-52"
                variant="contained"
                endIcon={
                  <ForwardIcon fontSize="small" sx={{ fontSize: 14 }} />
                }>
                Get A Quote
              </Button>
            </Box>
          </Box>

          <Box
            display={{xs:'none',md:'flex'}}
            flex={1}
            position={"relative"}
            left={-120}
            overflow={"hidden"}
            borderRadius={1200}>
            <Image
              alt="web"
              src="/faqfour.png"
              fill
              quality={75}
              priority
              style={{
                objectFit: "cover", // or 'contain' depending on your needs
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
