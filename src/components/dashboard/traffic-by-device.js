import { Card, CardHeader } from "@mui/material";

import TweetEmbed from "react-tweet-embed";

export const TrafficByDevice = (props) => {
  const tweets = [
    "1466058125216153601",
    "1466377791042056198",
    "1466404375237177346",
    "1466406809426489344",
  ];
  return (
    <Card {...props} style={{ overflow: "auto", height: "626px" }}>
      <CardHeader title="GiveAway alert" />
      {tweets.map((id, index) => (
        <TweetEmbed key={index} id={id} />
      ))}
    </Card>
  );
};
