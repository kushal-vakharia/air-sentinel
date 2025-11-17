import React from "react";
import { Box, CssBaseline } from "@mui/material";
import SideDrawer from "./assets/components/SideDrawer";
import Header from "./assets/components/Header";
import Dashboard from "./assets/components/Dashboard";
import MapScreen from "./assets/components/MapScreen";

export default function App() {
  const [view, setView] = React.useState<"dashboard" | "map">("dashboard");

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <SideDrawer onNavigate={setView} />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Header onSwitch={(v) => setView(v)} view={view} />
        <Box sx={{ flex: 1, overflow: "auto", p: 2, bgcolor: "#5D5D5D" }}>
          {view === "dashboard" ? <Dashboard /> : <MapScreen />}
        </Box>
      </Box>
    </Box>
  );
}
