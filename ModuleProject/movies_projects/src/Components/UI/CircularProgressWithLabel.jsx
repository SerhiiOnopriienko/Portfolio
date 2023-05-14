import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export function CircularProgressWithLabel(props) {
  const MIN = 0;
  const MAX = 10;
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);
  return (
    <Box
      sx={{
        top: -18,
        left: 10,
        border: "1px solid black",
        borderRadius: "20px",
        backgroundColor: "black",
        position: "relative",
        display: "inline-flex",
      }}
    >
      <CircularProgress
        sx={{ color: "green" }}
        variant="determinate"
        {...props}
        value={normalise(props.value)}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ color: "white" }}
          variant="caption"
          component="div"
          color="text.secondary"
        >
          {props.value}
        </Typography>
      </Box>
    </Box>
  );
}
