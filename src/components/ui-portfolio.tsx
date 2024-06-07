import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { ElementType } from "react";
import styles from "./ui-portfolio.module.scss";

interface CardProps {
  title: string;
  link: string;
  component?: ElementType<any, keyof JSX.IntrinsicElements>;
  image?: string;
  description: string;
}

const cards: CardProps[] = [
  {
    title: "MultiWindow Globe",
    link: "https://youtu.be/ZpfTMKH_fig",
    component: "video",
    image: "./globe.webm",
    description:
      "A conceptual repository showing Multi Window Virtual Transparent Effect",
  },
  {
    title: "Turborepo Template",
    image: "./turbo.webp",
    link: "https://turborepo-template-three.vercel.app/",
    description:
      "A GitHub template for crafting React 18 / Next.js 14 libraries",
  },
  {
    title: "Portfolio Showcase",
    image: "./mkc.webp",
    link: "https://mkc-five.vercel.app/portfolio",
    description: "A showcase of my work and projects - part of UI Experiments",
  },
  {
    title: "Personal Website",
    image: "./web.webp",
    link: "https://mayank-chaudhari.vercel.app",
    description: "My personal website built using Next.js app router and scss",
  },
];

const UIPortfolio = () => {
  return (
    <div className="snap" id="ui-portfolio">
      <header className="header">
        <Typography variant="h1" className={styles.title}>
          UI Portfolio
        </Typography>
      </header>
      <Container className={[styles.container, "snap"].join(" ")}>
        <Grid container className="cards">
          {cards.map((card) => (
            <Card key={card.link} sx={{ borderRadius: 2, width: "400px" }}>
              <CardActionArea href={card.link}>
                <CardMedia
                  component={card.component ?? "img"}
                  alt={card.title}
                  height="140"
                  image={card.image}
                  sx={{ width: "400px", height: "250px" }}
                  autoPlay
                  loop
                  loading="lazy"
                />
                <CardContent>
                  <Typography gutterBottom>{card.title}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ whiteSpace: "wrap" }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default UIPortfolio;
