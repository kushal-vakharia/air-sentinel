import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header({
  view,
  onSwitch,
}: {
  view: "dashboard" | "map";
  onSwitch: (v: "dashboard" | "map") => void;
}) {
  return (
    <AppBar position="static" sx={{ bgcolor: "#3e3e3e" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flex: 1, color: "#fff" }}>
          AirSentinel
        </Typography>
        <Button
          variant={view === "dashboard" ? "contained" : "text"}
          onClick={() => onSwitch("dashboard")}
          sx={{ mr: 1 }}
        >
          Analytics
        </Button>
        <Button
          variant={view === "map" ? "contained" : "text"}
          onClick={() => onSwitch("map")}
        >
          Live Map
        </Button>
      </Toolbar>
    </AppBar>
  );
}
