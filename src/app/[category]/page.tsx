import { Breadcrumbs, NotFound } from "@/components/common";
import { WithResponsiveLayout } from "@/components/hoc";
import { RecipeTiming, RecipeYieldActions } from "@/components/recipes/single";
import { fetchProductDetailsByCategory } from "@/services/product";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    category: string;
  };
};

const SinglePage = async ({ params }: Props) => {
  const { category } = params;

  const response = await fetchProductDetailsByCategory(category);

  if (!response) {
    return notFound();
  }

  const { content, image, title } = response;

  return (
    <WithResponsiveLayout
      component="article"
      gap="3rem"
      justifyContent="space-between"
    >
      <Stack
        component="section"
        flexDirection="column"
        gap="1rem"
        sx={{
          minWidth: {
            md: 555,
            sm: "100%",
          },
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" color="error" />}
          aria-label="breadcrumb"
          sx={{
            textTransform: "uppercase",
            color: "#000000",
            letterSpacing: ".094rem",
          }}
        >
          <Link href={`/${params?.category}`}>
            <Typography fontWeight="bold" fontSize="0.75rem">
              {params?.category}
            </Typography>
          </Link>
          <Link href={`/`}></Link>
        </Breadcrumbs>

        <Stack
          gap={"3rem"}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: 40,
                md: 60,
                sm: 40,
              },
            }}
          >
            {title}
          </Typography>
          <Typography fontSize={18} fontWeight="normal">
            {content}
          </Typography>

          <Stack gap="2rem" flexDirection="column">
            <RecipeTiming
              bakeTime="1 hr to 1 hr 15 mins"
              prepTime="10 mins"
              totalTime="1 hr 25 mins"
            />

            <Divider sx={{ width: "100%", height: "2px" }} />

            <RecipeYieldActions yieldValue='one 9" x 5" loaf' />
          </Stack>
        </Stack>
      </Stack>

      <Box
        sx={{
          minWidth: {
            md: 670,
            sm: "100%",
          },
          ">img": {
            borderRadius: "10px",
          },
        }}
      >
        <Image
          alt="bread-img"
          layout="responsive"
          width={670}
          height={443}
          src={image}
        />
      </Box>
    </WithResponsiveLayout>
  );
};

export default SinglePage;
