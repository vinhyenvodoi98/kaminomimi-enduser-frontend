import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Budget = (props) => (
  <Card sx={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Solana
          </Typography>
          <Typography color="textPrimary" variant="h4">
            18729
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              height: 56,
              width: 56,
            }}
            src="https://assets.coingecko.com/coins/images/4128/large/Solana.jpg?1635329178"
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1,
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since yesterday
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
