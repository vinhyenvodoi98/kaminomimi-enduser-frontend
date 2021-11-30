import { Card, CardHeader } from "@mui/material";

import { Tweet } from "src/components/twitter/tweet";

export const TrafficByDevice = (props) => {
  return (
    <Card {...props}>
      <CardHeader title="GiveAway alert" />
      <Tweet />
    </Card>
  );
};
