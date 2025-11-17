import { Box, Button, Drawer, Typography } from "@mui/material";
import { useState } from "react";

const MapScreenDrawer = () => {
  const [open, setOpen] = useState(true);

  return (
    <Drawer
      variant="persistent"
      anchor="right"
      open={open}
      sx={{
        "& .MuiDrawer-paper": {
          width: 360,
          bgcolor: "#3A3A3A",
          color: "#fff",
          p: 2,
          overflowY: "auto",
        },
      }}
    >
      {/* HEADER */}
      <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 1 }}>
        Drone Details
      </Typography>

      {/* DRONE TITLE */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 55,
            height: 55,
            bgcolor: "#5A5A5A",
            borderRadius: 1,
          }}
        />
        <Box>
          <Typography sx={{ fontSize: 18, fontWeight: 700 }}>EFV0</Typography>
          <Typography sx={{ fontSize: 15, color: "#ddd" }}>Mini 4K</Typography>
        </Box>
      </Box>

      {/* BUTTON ROW */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#E74A4A",
            color: "#fff",
            px: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Share
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "#fff",
            px: 2,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Flight History
        </Button>
      </Box>

      {/* TABS */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        {["Flight", "Profile", "Notes"].map((item) => (
          <Button
            key={item}
            sx={{
              bgcolor: "#fff",
              color: "#000",
              borderRadius: 1,
              px: 2,
              py: 0.8,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            {item}
          </Button>
        ))}
      </Box>

      {/* WHITELIST BUTTONS */}
      <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#555",
            color: "#fff",
            flex: 1,
            textTransform: "none",
          }}
        >
          Whitelist
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#444",
            color: "#fff",
            flex: 1,
            textTransform: "none",
          }}
        >
          Add to Watchlist
        </Button>
      </Box>

      {/* FLIGHT DETAILS */}
      <Box
        sx={{
          border: "2px solid #2D9CDB",
          borderRadius: 1,
          p: 2,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: 16,
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Flight Details
          <Box sx={{ fontSize: 12, opacity: 0.8 }}>
            Last Seen: 2 days 23 hours 50 min
          </Box>
        </Typography>

        {/* GRID VALUES */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 1,
            mt: 1,
          }}
        >
          {[
            ["Created On", "2025-10-25 08:04:41 EST"],
            ["Flight Duration", "00:00:37"],
            ["Drone Altitude", "328 ft"],
            ["Latitude/Longitude", "29.7633182, -95.3731794"],
            ["Height", "269.03ft"],
            ["UASID", "16629963001 761402881337"],
            ["Mac Address", "1662996530"],
            ["Drone Detected By", "Texas County Sheriff"],
            ["Distance of Detection", "4.51 mi"],
          ].map(([title, value], i) => (
            <Box
              key={i}
              sx={{
                bgcolor: "#4A4A4A",
                borderRadius: 1,
                p: 1.2,
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

      {/* PILOT LOCATION */}
      <Box sx={{ bgcolor: "#4A4A4A", p: 2, borderRadius: 1, mb: 2 }}>
        <Typography sx={{ fontWeight: 700 }}>Pilot Location</Typography>
        <Typography sx={{ fontSize: 14 }}>
          1526 Memorial Drive
          <br />
          Frontage Road, Houston TX
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 1,
            bgcolor: "#E74A4A",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 1,
          }}
        >
          Go to Maps
        </Button>
      </Box>

      {/* DRONE LOCATION */}
      <Box sx={{ bgcolor: "#4A4A4A", p: 2, borderRadius: 1 }}>
        <Typography sx={{ fontWeight: 700 }}>Drone Location</Typography>
        <Typography sx={{ fontSize: 14 }}>
          1526 Memorial Drive
          <br />
          Frontage Road, Houston TX
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 1,
            bgcolor: "#E74A4A",
            color: "#fff",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 1,
          }}
        >
          Go to Maps
        </Button>
      </Box>

      <Button
        onClick={() => setOpen(false)}
        sx={{
          mt: 3,
          bgcolor: "#000",
          color: "#fff",
          textTransform: "none",
          fontWeight: 600,
          width: "100%",
        }}
      >
        Close
      </Button>
    </Drawer>
  );
};

export default MapScreenDrawer;
