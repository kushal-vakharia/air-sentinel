import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import SyncIcon from "@mui/icons-material/Sync";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function Header({
  view,
  onSwitch,
}: {
  view: "dashboard" | "map";
  onSwitch: (v: "dashboard" | "map") => void;
}) {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#3E3E3E",
        boxShadow: "none",
        px: 2,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <SyncIcon fontSize="small" />
            <Typography sx={{ fontSize: 14 }}>Live</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <PlayCircleIcon fontSize="small" />
            <Typography sx={{ fontSize: 14 }}>Playback</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <DescriptionIcon fontSize="small" />
            <Typography sx={{ fontSize: 14 }}>Records</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "#fff",
              fontWeight: view === "dashboard" ? 700 : 400,
            }}
            onClick={() => onSwitch("dashboard")}
          >
            <ShowChartIcon fontSize="small" />
            <Typography sx={{ fontSize: 14 }}>Analytics</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#E83822",
              textTransform: "none",
              borderRadius: 0,
              color: "#fff",
              fontWeight: 600,
              px: 2.5,
              "&:hover": { bgcolor: "#d44141" },
            }}
          >
            Historical Flights
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderRadius: 0,
              textTransform: "none",
              fontWeight: 600,
              px: 2,
              display: "flex",
              alignItems: "center",
              border: "1px solid #fff",
              gap: 1,
            }}
          >
            <CalendarMonthIcon fontSize="small" />
            Last Week
          </Button>

          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderRadius: 0,
              border: "1px solid #fff",
              textTransform: "none",
              fontWeight: 600,
              px: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                bgcolor: "#4A4A4A",
              },
            }}
          >
            <FilterAltIcon fontSize="small" />
            Filter
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
