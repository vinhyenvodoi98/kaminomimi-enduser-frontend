import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const TasksProgress = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Ethereum
          </Typography>
          <Typography color="textPrimary" variant="h4">
            39438
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              height: 56,
              width: 56,
            }}
            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
          ></Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 2,
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1,
          }}
        >
          12.3%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since yesterday
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
