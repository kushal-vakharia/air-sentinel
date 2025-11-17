import { Box, Button } from "@mui/material";
import MapScreenDrawer from "./MapScreenDrawer";

export default function MapScreen() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <MapScreenDrawer />
      <Box sx={{ flex: 1, position: "relative" }}>
        {/* large map (iframe as demo) */}
        <iframe
          className="map-iframe"
          title="map-screen"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19844.806074323957!2d-0.1425!3d51.5072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1600000000000"
        />

        <Button
          variant="contained"
          color="warning"
          sx={{ position: "absolute", left: 16, bottom: 16, borderRadius: 28 }}
        >
          Pilot Location
        </Button>
      </Box>
    </Box>
  );
}
