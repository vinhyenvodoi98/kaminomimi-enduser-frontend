import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const TotalCustomers = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Bitcoin
          </Typography>
          <Typography color="textPrimary" variant="h4">
            30812
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              height: 56,
              width: 56,
            }}
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          />
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
          8%
        </Typography>
        <Typography color="textSecondary" variant="caption">
          Since yesterday
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
