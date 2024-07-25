import { PRODUCTS } from "@/constants/products";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { getRandomText } from "./utils";
import { WithCenterLayout } from "@/components/hoc";
import { ImageItem } from "@/interfaces";

const ImageCard = ({ src, category }: { src: string; category: string }) => (
  <Card
    sx={{
      width: 345,
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      transition: "transform 0.3s",
      "&:hover": {
        transform: "scale(1.05)",
      },
    }}
  >
    <Link href={`/${category}`}>
      <CardMedia component="img" height="140" image={src} alt="Product Image" />
      <CardContent>
        <Typography variant="body2" color="text.secondary" mb={4}>
          {getRandomText(1)}
        </Typography>
        <WithCenterLayout
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6" color="text.primary">
            11.5$
          </Typography>

          <Button size="small" variant="contained" color="primary">
            Add to Cart
          </Button>
        </WithCenterLayout>
      </CardContent>
    </Link>
    <CardActions></CardActions>
  </Card>
);

const CardsPage = async () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap={2} // 20px gap
      justifyContent="center"
      padding={2}
      my={5}
    >
      {PRODUCTS.map((item: ImageItem, index) => (
        <ImageCard key={index} src={item.src} category={item.category} />
      ))}
    </Box>
  );
};

export default function Home() {
  return (
    <main>
      <CardsPage />
    </main>
  );
}
