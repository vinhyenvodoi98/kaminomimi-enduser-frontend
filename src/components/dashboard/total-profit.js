import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const TotalProfit = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Binance Coin
          </Typography>
          <Typography color="textPrimary" variant="h4">
            23113
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              height: 56,
              width: 56,
            }}
            src="https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png?1547034615"
          ></Avatar>
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
            3%
          </Typography>
          <Typography color="textSecondary" variant="caption">
            Since yesterday
          </Typography>
        </Box>
      </Grid>
    </CardContent>
  </Card>
);
