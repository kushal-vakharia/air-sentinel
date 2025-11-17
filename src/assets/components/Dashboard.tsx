import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import HorizontalChart from "./HorizontalChart";

export default function Dashboard() {
  return (
    <Box sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            fontWeight: 600,
            fontStyle: "normal",
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0px",
            mr: 2,
          }}
        >
          Analytics
        </Typography>

        <TextField
          select
          size="small"
          sx={{ minWidth: 220, bgcolor: "#fff" }}
          defaultValue="Primary Watchlist"
        >
          <MenuItem value="Primary Watchlist">Primary Watchlist</MenuItem>
          <MenuItem value="All Flights">All Flights</MenuItem>
        </TextField>

        <TextField
          select
          size="small"
          sx={{ minWidth: 220, bgcolor: "#fff" }}
          defaultValue="Detected By"
        >
          <MenuItem value="Detected By">Detected By</MenuItem>
          <MenuItem value="All Sensors">All Sensors</MenuItem>
        </TextField>

        <TextField
          placeholder="Location Based Search"
          size="small"
          sx={{ minWidth: 220, bgcolor: "#fff" }}
        />

        <TextField
          placeholder="Radius"
          size="small"
          sx={{ width: 220, bgcolor: "#fff" }}
        />
      </Box>

      <Grid container spacing={2}>
        <Grid container spacing={2} size={{ xs: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 2,
                height: "100%",
                bgcolor: "#E74A4A",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                42
              </Typography>
              <Typography>Unique Aircraft</Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                105
              </Typography>
              <Typography>Total Flights</Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                3
              </Typography>
              <Typography>Altitude Violations</Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                4
              </Typography>
              <Typography>BVLOS Violations</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Grid size={{ xs: 6 }}>
          <Paper sx={{ height: 360, p: 0 }}>
            <iframe
              title="demo-map"
              className="map-iframe"
              style={{ border: 0, width: "100%", height: "100%" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19844.806074323957!2d-0.1425!3d51.5072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3333!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1600000000000"
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Top 10 Aircraft seen most
            </Typography>
            <HorizontalChart />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Top 10 with BVLOS Violations
            </Typography>
            <HorizontalChart />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Top 10 with Altitude Violations
            </Typography>
            <HorizontalChart />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <Paper sx={{ p: 2 }}>
            <Typography sx={{ fontWeight: 600, mb: 2 }}>
              Top 10 with Night Flights
            </Typography>
            <HorizontalChart />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
