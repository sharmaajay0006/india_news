import { experimentalStyled as styled } from "@mui/material/styles";
import { Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import Spinner from "./Spinner";
import { Box } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const News = (props) => {
  const [news, setNews] = useState({
    loading: false,
    totalResults: 0,
    articles: [],
  });

  let key = "dbcc35b7597548e892cd139ba73b1bfe";
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${key}&pageSize=100`;

  const fetchNews = async () => {
    setNews({ loading: true });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setNews({
      totalResults: data.totalResults,
      articles: data.articles,
      loading: false,
    });
  };
  useEffect(() => {
    fetchNews();
  }, [props.category]);
  return (
    <Container style={{ paddingTop: 80, paddingBottom: 80 }}>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "30px",
          //   marginTop: "30px",
        }}
      >
        <Item>
          <Typography variant="h5">
            Top HeadLines -{" "}
            <span style={{ color: "red", textTransform: "capitalize" }}>
              {props.category}
            </span>
          </Typography>{" "}
        </Item>
        <Item>
          <Typography variant="h5">
            Total Articles -{" "}
            <span style={{ color: "red" }}>
              {news.totalResults ? news.totalResults : 0}
            </span>
          </Typography>
        </Item>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {news.loading ? (
          <Box
            sx={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: "40vw",
              top: "40vh",
            }}
          >
            <Spinner />
          </Box>
        ) : (
          news.articles.map((article, index) => {
            return (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <MediaCard article={article} />
                </Box>
              </Grid>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default News;
