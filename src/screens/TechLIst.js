import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCards from "../components/newsCards";
import Footers from "../components/Footers";
import Banners from "../components/Banners";

import "../css_styles/TechList.css";
// IMPORT FROM ACTIONS
import { listTechs } from "../actions/techActions";
import { advertiseListAction } from "../actions/advertiseActions";

import Categories from "../components/Categories";
import Advertise from "../components/Advertise";
import CelebCarousel from "../components/CelebCarousel";
import Loaders from "../components/Loader";
import AdsComponent from "../components/AdsComponent";
import ErrorMessage from "../components/ErrorMessage";

const techss = {
  title: "title",
  urlToImage:
    "https://staticg.sportskeeda.com/editor/2021/11/caca5-16370851386444-1920.jpg",
  description: "description",
  author: "author",
  content: "content",
};

const TechList = () => {
  const dispatch = useDispatch();

  const techList = useSelector((state) => state.techList);
  const advertiseList = useSelector((state) => state.advertiseList);

  const { error: techListError, loading: techListLoading, techs } = techList;
  const {
    error: advertiseError,
    loading: advertiseLoading,
    advertises,
  } = advertiseList;

  useEffect(() => {
    dispatch(listTechs());
    dispatch(advertiseListAction());
  }, [dispatch]);

  // const [techs, setTechs] = useState([]);
  // useEffect(() => {
  //   async function fetchTech() {
  //     const { data } = await axios.get(
  //       "http://127.0.0.1:8000/api/technology/list/"
  //     );
  //     setTechs(data);
  //   }
  //   fetchTech();
  // }, []);
  // console.log("tech", techs);

  return (
    <>
      <div className="techlist">
        <CelebCarousel celeb={techss} />
        <Banners />
        <Categories />
        <div className="techlist_headline">
          <div className="techlist_headline1">headline1</div>
          <div className="techlist_headline2">headline2</div>
        </div>

        <div className="techlist_main">
          <div className="techlist_main_inside">
            <div className="techlist_main_text">
              <div className="techlist_main_text1"></div>
              <div className="techlist_main_text2">Latest news</div>
            </div>
            <div className="techlist_main_news">
              <div className="techlist_main_news_news1">
                {techListLoading ? (
                  <div className="techlist_main_news1">
                    <Loaders />
                  </div>
                ) : techListError ? (
                  <ErrorMessage type="error" error={techListError}/>
                ) : (
                  <div className="techlist_main_news1">
                    {techs.map((tech) => (
                      <NewsCards key={tech.id} tech={tech} />
                    ))}
                  </div>
                )}
              </div>

              <div className="techlist_main_news2">
                {advertiseLoading ? (
                  <Loaders />
                ) : advertiseError ? (
                  <ErrorMessage type="error" error={advertiseError} />
                ) : (
                  <div className="techlist_main_ads">
                    {advertises
                      ? advertises.map((advertise) => (
                          <Advertise key={advertise.id} advertise={advertise} />
                        ))
                      : null}
                  </div>
                )}
              </div>
              <div className="techlist_main_news_ads">
                <AdsComponent />
              </div>
            </div>
          </div>
        </div>

        <Footers />
      </div>
    </>
  );
};

export default TechList;
