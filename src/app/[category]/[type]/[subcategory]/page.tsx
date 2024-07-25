"use client";
import { Breadcrumbs } from "@/components/common";
import { RecipeTiming, RecipeYieldActions } from "@/components/recipes/single";
import { WithResponsiveLayout } from "@/components/hoc";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useMobile } from "@/hooks";

const SinglePage = () => {
  const { category, type, subcategory } = useParams();
  const isMobile = useMobile();
  return (
    <WithResponsiveLayout
      component="article"
      gap="2rem"
      justifyContent="space-between"
    >
      <Stack
        component="section"
        flexDirection="column"
        gap="1rem"
        minWidth={isMobile ? "auto" : 555}
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
          <Link href={`/${category}`}>
            <Typography fontWeight="bold" fontSize="0.75rem">
              {category}
            </Typography>
          </Link>

          <Link href={`/${category}/${type}`}>
            <Typography fontWeight="bold" fontSize="0.75rem">
              {type}
            </Typography>
          </Link>

          <Link href={`/${category}/${type}/${subcategory}`}>
            <Typography fontWeight="bold" fontSize="0.75rem">
              {subcategory}
            </Typography>
          </Link>
        </Breadcrumbs>

        <Stack
          gap={isMobile ? "1.5rem" : "3rem"}
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            component="h1"
            variant="h1"
            fontWeight="bold"
            fontSize={isMobile ? 30 : 60}
          >
            Whole-Grain Banana Bread
          </Typography>
          <Typography fontSize={18} fontWeight="normal">
            This one-bowl banana bread — our 2018 Recipe of the Year — uses the
            simplest ingredients, but is incredibly moist and flavorful. While
            the recipe calls for a 50/50 mix of flours (all-purpose and whole
            wheat), we often make the bread 100% whole wheat, and honestly? No
            one can tell, it's that good! And not only is this bread delicious —
            it's versatile.
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
        component="section"
        minWidth={isMobile ? "100%" : 670}
        overflow="hidden"
      >
        <Image
          alt="bread-img"
          layout="responsive"
          width={670}
          height={443}
          src="/img/grain-banana-bread.webp"
        />
      </Box>
    </WithResponsiveLayout>
  );
};

export default SinglePage;
