import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// COMPONENT IMPORT
import Loaders from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

// CSS IMPORT
import "../css_styles/Advertise.css";

// CONSTANT IMPORT
import {
  SHOP_CREATE_RESET,
  SHOP_DELETE_RESET,
} from "../constants/productivityConstants";

// ACTION IMPORT
import {
  shopListAction,
  shopCreateAction,
  shopDeleteAction,
} from "../actions/advertiseActions";



const ShopCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();
  // const { id } = params;


  // SHOP CREATE

  const shopCreate = useSelector((state) => state.shopCreate);
  const {
    error:     createShopError,
    loading:   createShopLoading,
    shop    :  createShop,
    success:   createShopSuccess,
  } = shopCreate;

  // SHOP LIST
  const shopList = useSelector((state) => state.shopList);
  const {
    error:      listShopError,
    loading:    listShopLoading,
    shops   :   listShop,
  } = shopList;

  // SHOP DELETE
  const shopDelete = useSelector((state) => state.shopDelete);
  const {
    error:     deleteShopError,
    loading:   deleteShopLoading,
    shop :     deleteShop,
    success:   deleteShopSuccess,
  } = shopDelete;


  // USEEFFECT

  useEffect(() => {
    dispatch(shopListAction());
    dispatch({ type: SHOP_CREATE_RESET });
    dispatch({ type: SHOP_DELETE_RESET });

    if (createShopSuccess) {
      navigate(`/shop-update/${createShop.id}/${createShop.slug}`);
    }
  }, [dispatch, createShopSuccess, deleteShopSuccess, deleteShop]);


  // CREATE SHOP HANDLER
  const shopCreateHandler = () => {
    dispatch(shopCreateAction());
  };

  // DELETE SHOP HANDLER
  const shopDeleteHandler = (id, slug) => {
    if (window.confirm("Are You Sure You Want To Delete This Items")) {
      dispatch(shopDeleteAction(id, slug));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "50px",
      }}
    >
      <div>
        {createShopError ? (
          <ErrorMessage type="error" error={createShopError} />
        ) : createShopError ? (
          <Loaders />
        ) : (
          <button onClick={shopCreateHandler}>Create Shops Post</button>
        )}
      </div>

      {listShopLoading ? (
        <Loaders />
      ) : listShopError ? (
        <ErrorMessage type="error" error={listShopError} />
      ) : (
        <div className="post_table">
          {deleteShopError && (
            <ErrorMessage type="error" error={deleteShopError} />
          )}
          <table className="post_scroll">
            <thead>
              <tr className="post_header">
                <th>id</th>
                <th>title</th>
                <th>isApproved</th>
                <th>edit</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {listShop.map((shop) => (
                <tr>
                  <td>{shop.id}</td>
                  <td>{shop.title}</td>
                  <td>{shop.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/shop-update/${shop.id}/${shop.slug}`}>
                    <td>edit</td>
                  </Link>
                  {deleteShopLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => shopDeleteHandler(shop.id, shop.slug)}>
                      Delete
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ShopCreate;
