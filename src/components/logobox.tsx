import { Box } from "@mui/material";
import Image from "next/image";

export default function LogoBox({footer}: {footer?: boolean}) {
  return (
    <Box
      height={{ xs: 60, md: 100 }}
      borderRadius={{ xs: 1000, md: 30 }}
      overflow={"hidden"}
      position={"relative"}
      width={{ xs: footer?60:0, md: 200 }}>
      <Image
        src="/1.png"
        alt="Logo"
        fill
        style={{ objectFit: "cover" }}
        quality={75}
      />
    </Box>
  );
}
