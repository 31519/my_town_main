import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"
import {useLocation} from "react-router-dom"
import "../css_styles/TechList.css";
import Footers from "../components/Footers";
import Banners from "../components/Banners";
import Categories from "../components/Categories";
import CelebCarousel from "../components/CelebCarousel";
import Paginate from "../components/Pagination";
import SearchBox from "../components/SearchBox";
import AllCards from "../components/AllCards";
import {shopListAction} from "../actions/advertiseActions";
import { Grid, Typography } from "@mui/material";
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { makeStyles } from "@mui/styles";

const celeb = {
  title: "title",
  urlToImage:
    "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
  description: "description",
  author: "author",
  content: "content",
};

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  gridContent: {
    justifyContent: "center",
    alignItem: "center",
    display: "flex",
    paddingBottom: "20px",
    backgrounColor: "white",
  },
  title: {
    fontSize: "16px",
  },
  gridHeader: {
    justifyContent: "center",
    marginTop: "10px",
    marginBottom: "10px",
    backgrounColor: "white",
    color: "green",
  },
  date: {
    opacity: 0.6,
    fontSize: "14px",
    display: "flex",
    alignItem: "center",
    textAlign: "center",
  },
  header: {
    fontSize: "20px",
  },
});

const techss = {
  title: "title",
  urlToImage:
    "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
  description: "description",
  author: "author",
  content: "content",
};

const ShopScreen = () => {
  const location = useLocation();
  let keyword = location.search;

  // const pathname = window.location.pathname

  const classes = useStyles();
  const dispatch = useDispatch();

  const shopList = useSelector((state) => state.shopList);

  const { error: listShopError, loading: listShopLoading , shops: listShop, pages, page } = shopList;

  useEffect(() => {
    dispatch(shopListAction(keyword));
  }, [dispatch, keyword]);
  return (

    <>
    <div className="techlist">
      <CelebCarousel celeb={celeb} />
      <Banners />
      <Categories />

      <SearchBox />
      {/* Content */}

      <Grid className={classes.gridHeader} container item>
        <Typography className={classes.header} color="green" variant="h3">
          Shops
        </Typography>
      </Grid>

      <Grid spacing={2} className={classes.gridContent} container>
        <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
          Hi Loverlj lask jflks jfkslajfkl sdajfk sjsdljgk ldjgksjdk fgjs
          kldjgl dfjl jfkls ajfkls
        </Grid>
        {listShopLoading ? (
          <Loaders />
        ) : listShopError ? (
          <ErrorMessage type="error" error={listShopError} />
        ) : (
          <Grid spacing={1} item xs={12} sm={6} lg={6} md={6}>
            {listShop.map((shop) => (
              <AllCards key={shop.id} item={shop} model="shop" />
            ))}
          </Grid>
        )}

        <Grid spacing={1} item xs={12} sm={3} lg={3} md={3}>
          jal;fjdsj dfksjflkdjk fhkjasdjg sgjslkgjk ldjfkjdl fjdhfkjash
          fijksdhf
        </Grid>
      </Grid>
      <Paginate keyword={keyword} page={page} pages={pages}/>

      {/* <CategoryCarousel celeb={techss} /> */}

      <Footers />
    </div>
    </>
  );
};

export default ShopScreen;