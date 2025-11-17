import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";

export default function SideDrawer({
  onNavigate,
}: {
  onNavigate: (v: "dashboard" | "map") => void;
}) {
  const [open, setOpen] = React.useState(true);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 260 : 90,
        flexShrink: 0,
        transition: "width 0.35s ease",
        "& .MuiDrawer-paper": {
          width: open ? 260 : 90,
          transition: "width 0.35s ease",
          bgcolor: "#E8EBED",
          overflow: "hidden",
          boxShadow: "0px 4px 4px 0px #0000001A",
          pt: 2.5,
          px: open ? 1.75 : 1.5,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "space-between" : "center",
          transition: "all 0.3s ease",
          mb: 3,
        }}
      >
        <img
          src={open ? "/logo.png" : "/small-logo.png"}
          style={{
            height: open ? 40 : 42,
            transition: "all 0.3s ease",
          }}
        />

        <IconButton
          sx={{
            width: 32,
            height: 32,
            bgcolor: "#404040",
            borderRadius: 2,
            "&:hover": { bgcolor: "#505050" },
            display: open ? "flex" : "none",
          }}
          onClick={() => setOpen(false)}
        >
          <MenuIcon sx={{ color: "#fff", fontSize: 20 }} />
        </IconButton>
      </Box>

      {!open && (
        <Box
          sx={{
            transition: "opacity 0.3s ease",
            opacity: open ? 0 : 1,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2.4 }}>
            <IconButton
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#404040",
                borderRadius: 2,
                "&:hover": { bgcolor: "#505050" },
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon sx={{ color: "#fff", fontSize: 20 }} />
            </IconButton>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "12px",
              lineHeight: "100%",
              letterSpacing: "0px",
              width: "60px",
              bgcolor: "#404040",
              color: "#fff",
              borderRadius: 1,
              py: 1.5,
              px: 1,
              "&:hover": { bgcolor: "#505050" },
              textTransform: "none",
              mb: 6,
            }}
            onClick={() => setOpen(true)}
          >
            Menu
          </Button>
        </Box>
      )}

      <Box sx={{ flex: 1 }}>
        {open && (
          <>
            <Accordion
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "#404040",
                color: "#fff",
                mb: 1.5,
                borderRadius: 1,
                transition: "all 0.3s ease",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
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
                  Menu
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box sx={{ color: "#fff", pl: 1 }}>
                  <Typography
                    sx={{ py: 1, cursor: "pointer", fontSize: "12px" }}
                    onClick={() => onNavigate("dashboard")}
                  >
                    Analytics
                  </Typography>
                  <Typography
                    sx={{ py: 1, cursor: "pointer", fontSize: "12px" }}
                    onClick={() => onNavigate("map")}
                  >
                    Live Map
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion
              disableGutters
              elevation={0}
              sx={{
                bgcolor: "#404040",
                color: "#fff",
                mb: 1.5,
                borderRadius: 1,
                transition: "all 0.3s ease",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
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
                  Drons
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box sx={{ color: "#fff", pl: 1 }}>
                  <Typography
                    sx={{ py: 1, cursor: "pointer", fontSize: "12px" }}
                  >
                    Drons 1
                  </Typography>
                  <Typography
                    sx={{ py: 1, cursor: "pointer", fontSize: "12px" }}
                  >
                    Drons 2
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>
          </>
        )}

        {!open ? null : null}

        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: open ? "12px" : "10px",
              lineHeight: "16px",
              letterSpacing: "0px",
              textTransform: "uppercase",
            }}
            component="h5"
          >
            Flying Now
          </Typography>
          {[1, 2, 3].map((i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                flexDirection: open ? "row" : "column",
                gap: 1,
                transition: "all 0.3s ease",
              }}
            >
              <img
                src="/icons/cross.svg"
                alt="cross"
                width="20px"
                height="20px"
              />

              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                  }}
                >
                  Phantom 4 RTK 006F
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "10px",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                  }}
                >
                  10:58 AM – Now flying
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3, borderColor: "#000", borderWidth: 1 }} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Typography
            sx={{
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: open ? "12px" : "10px",
              lineHeight: "16px",
              letterSpacing: "0px",
              textTransform: "uppercase",
            }}
            component="h5"
          >
            Flights recently ended
          </Typography>

          {[1, 2, 3, 4].map((i) => (
            <Box
              key={i}
              sx={{
                flexDirection: open ? "row" : "column",
                gap: 1,
                transition: "all 0.3s ease",
              }}
            >
              <img
                src="/icons/cross.svg"
                alt="cross"
                width="20px"
                height="20px"
              />

              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontStyle: "normal",
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                  }}
                >
                  Mini 4K EFV{i}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "10px",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                  }}
                >
                  11:06 AM – 11:08 AM
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Drawer>
  );
}
