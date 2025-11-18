import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const MapScreenDrawer = () => {
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          width: isMobile ? "100%" : 326,
          bgcolor: "#404040",
          color: "#fff",
          marginTop: 8,
          p: 2,
          overflowY: "auto",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          Drone Details
        </Typography>

        <IconButton onClick={() => setOpen(false)}>
          <CloseIcon sx={{ color: "#fff", fontSize: 18 }} />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 54,
            height: 54,
            bgcolor: "#fff",
          }}
        />
        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0px",
            }}
          >
            EFV0 <br /> Mini 4K
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 1, mb: 2, justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{
            width: 52,
            height: 24,
            bgcolor: "#E84C3D",
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0px",
            borderRadius: 0,
          }}
        >
          Share
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0px",
            borderRadius: 0,
          }}
        >
          Flight History
        </Button>
      </Box>

      <Box sx={{ display: "flex", mb: 2, width: "100%" }}>
        {["Flight", "Profile", "Notes"].map((item) => (
          <Button
            variant="outlined"
            key={item}
            sx={{
              width: "100%",
              height: 30,
              border: "1px solid #fff",
              color: "#fff",
              textTransform: "none",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "12px",
              lineHeight: "100%",
              letterSpacing: "0px",
              borderRadius: 0,
            }}
          >
            {item}
          </Button>
        ))}
      </Box>

      <Box sx={{ display: "flex", gap: 1, mb: 3, justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{
            maxWidth: 68,
            height: 24,
            bgcolor: "#E84C3D",
            color: "#fff",
            flex: 1,
            py: 1,
            textTransform: "none",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0px",
            borderRadius: 0,
          }}
        >
          Whitelist
        </Button>

        <Button
          variant="contained"
          sx={{
            width: 120,
            height: 24,
            bgcolor: "#000",
            color: "#fff",
            textTransform: "none",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "12px",
            lineHeight: "100%",
            letterSpacing: "0px",
            borderRadius: 0,
          }}
        >
          Add to Watchlist
        </Button>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          Flight Details
        </Typography>

        <Typography
          sx={{
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "10px",
            lineHeight: "100%",
            letterSpacing: "0px",
          }}
        >
          Last Seen: 2 days 23 hours 50 min
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1.2,
          }}
        >
          {[
            ["Created On", "2025-10-25 08:04:41 EST"],
            ["Flight Duration", "00:00:37"],
            ["Drone Altitude", "328 ft"],
            ["Latitude/Longitude", "29.7633182, -95.3731794"],
            ["Height", "269.03 ft"],
            ["UASID", "16629963001 761402881337"],
            ["Mac Address", "1662996530"],
            ["Drone Detected By", "Texas County Sheriff"],
            ["Distance of Detection", "4.51 mi"],
          ].map(([title, value], i) => (
            <Box
              key={i}
              sx={{
                // ⬇ First item spans full row
                gridColumn: i === 0 ? "1 / -1" : "auto",
                borderRadius: 1,
                p: 1.3,
              }}
            >
              <Typography sx={{ fontSize: 13, opacity: 0.9 }}>
                {title}
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {[
        [
          "Pilot Location",
          "1526 Memorial Drive\nFrontage Road, Houston TX",
          "29.7633182, -95.3731794",
        ],
        [
          "Drone Location",
          "1526 Memorial Drive\nFrontage Road, Houston TX",
          "29.7633182, -95.3731794",
        ],
      ].map(([label, addr, desc], i) => (
        <Box
          key={i}
          sx={{
            p: 2,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              {label}
            </Typography>

            <Typography
              sx={{
                fontWeight: 500,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              {addr}
            </Typography>

            <Typography
              sx={{
                color: "#C4C4C4",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              {desc}
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{
              width: 88,
              height: 24,
              bgcolor: "#E84C3D",
              color: "#fff",
              textTransform: "none",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "11px",
              lineHeight: "12px",
              letterSpacing: "0px",
              borderRadius: 1,
              textWrap: "nowrap",
            }}
          >
            Go to Maps
          </Button>
        </Box>
      ))}
    </Drawer>
  );
};

export default MapScreenDrawer;
