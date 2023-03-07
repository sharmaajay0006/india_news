import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

export default function MediaCard(props) {
  console.log(props.article);
  return (
    <Link href={props.article.url} target="_blank" underline="none">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            props.article.urlToImage
              ? props.article.urlToImage
              : "https://www.pewresearch.org/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png"
          }
          title="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.article.title.length > 80
              ? props.article.title.slice(0, 80) + "..."
              : props.article.title}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
          }}
        >
          <Button size="small" variant="outlined" color="error">
            Read More
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}
