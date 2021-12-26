import React from "react";
import "../css_styles/Table.css";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Loaders from "../components/Loader";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "black",
    color: "blue",
    // backgroundColor: theme.palette.primary.dark,
    // color: theme.palette.getContrastText(theme.palette.primary.dark)
  },
  avatar: {
    // backgroundColor: theme.palette.primary.light,
    // color: theme.palette.getContrastText(theme.palette.primary.light)
  },
  name: {
    fontWeight: "bold",
    // color: theme.palette.secondary.dark
    color: "green",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));


const AdminTable = ({
  createModelError,
  modelCreateHandler,
  listModelLoading,
  listModelError,
  deleteModelError,
  listModel,
  deleteModelLoading,
  modelDeleteHandler,
  redirect,
}) => {
  // const cats = cat;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {listModelLoading ? (
        <Loaders />
      ) : listModelError ? (
        <ErrorMessage type="error" error={listModelError} />
      ) : (

      
      <TableContainer component={Paper} className={classes.tableContainer}>
        {createModelError ? (
          <ErrorMessage type="error" error={createModelError} />
        ) : createModelError ? (
          <Loaders />
        ) : (
          <Button className={classes.status} onClick={modelCreateHandler}>
            Create {redirect} Post
          </Button>
        )}

        {deleteModelError && (
          <ErrorMessage type="error" error={deleteModelError} />
        )}
        <Grid>{listModel.length}</Grid>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>Title</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Created At
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                Approved
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>Edit</TableCell>
              <TableCell className={classes.tableHeaderCell}>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listModel.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((model) => (
              <TableRow key={model.id}>
                <TableCell>
                  <Grid container>
                    {/* <Grid item lg={2}>
                          <Avatar alt={model.id} src='.' className={classes.avatar}/>
                      </Grid> */}
                    <Grid item lg={12}>
                      <Typography className={classes.name}>
                        {model.title}
                      </Typography>
                      {/* <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                          <Typography color="textSecondary" variant="body2">{row.phone}</Typography> */}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {model.createdAt}
                  </Typography>
                  {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                        (model.isApproved === true && "green") ||
                        (model.isApproved === false && "red"),
                    }}
                  >
                    {model.isApproved ? "Approved" : "Not yet"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link to={`/${redirect}-update/${model.id}/${model.slug}`}>
                    <Typography className={classes.status}>Edit</Typography>
                  </Link>
                </TableCell>
                <TableCell>
                  {deleteModelLoading ? (
                    <Loaders />
                  ) : (
                    <Button
                      className={classes.status}
                      onClick={() => modelDeleteHandler(model.id, model.slug)}
                    >
                      Delete
                    </Button>
                  )}
                </TableCell>
              </TableRow>
              
            ))}

          </TableBody>
          <TableFooter>
            <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={listModel.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
          </TableFooter>
        </Table>
      </TableContainer>

  )}

      {/* <div>
        {createModelError ? (
          <ErrorMessage type="error" error={createModelError} />
        ) : createModelError ? (
          <Loaders />
        ) : (
          <button onClick={modelCreateHandler}>Create {redirect} Post</button>
        )}
      </div>

      {listModelLoading ? (
        <Loaders />
      ) : listModelError ? (
        <ErrorMessage type="error" error={listModelError} />
      ) : (
        <div className="post_table">
          {deleteModelError && (
            <ErrorMessage type="error" error={deleteModelError} />
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
              {listModel.map((model) => (
                <tr>
                  <td>{model.id}</td>
                  <td>{model.title}</td>
                  <td>{model.isApproved ? "Yes" : "No"}</td>
                  <Link to={`/${redirect}-update/${model.id}`}>
                    <td>edit</td>
                  </Link>
                  {deleteModelLoading ? (
                    <Loaders />
                  ) : (
                    <td onClick={() => modelDeleteHandler(model.id)}>
                      Delete
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )} */}
      
    </div>
  );
};

export default AdminTable;
