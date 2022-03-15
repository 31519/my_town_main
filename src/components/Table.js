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
    minWidth: '100%',
  },
  tableContainer: {
    // borderRadius: 15,
    margin: "20px 10px",
    // padding:'10px',
    maxWidth: 950,
  },
  tableHeaderCell: {
    // fontWeight: "bold",
    backgroundColor: "#e1cece",
    color: "black",
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
    fontSize: "14px",
    color: "black",
    backgroundColor: "#f7dc06",
    // borderRadius: '10px',
    marginLeft: "10px",
    display: "inline-block",
  },
  tableRow:{
    margin:"0px",
    padding:"0px"
  },
  width: '50px'
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

      <Paper>
      <TableContainer component={Paper} className={classes.tableContainer}>
        {createModelError ? (
          <ErrorMessage type="error" error={createModelError} />
        ) : createModelError ? (
          <Loaders />
        ) : (
          <Button variant='contained' color='success' className={classes.status} onClick={modelCreateHandler}>
            Create {redirect} Post
          </Button>
        )}

        {deleteModelError && (
          <ErrorMessage type="error" error={deleteModelError} />
        )}
        <Grid>{listModel.length} Items</Grid>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className={classes.tableRow}>
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
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                        (model.isApproved === true && "green") ||
                        (model.isApproved === false && "red"),
                      color:"white",
                      padding:'5px'
                    }}
                  >
                    {model.isApproved ? "Approved" : "Not yet"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {model.createdAt}
                  </Typography>
                  {/* <Typography color="textSecondary" variant="body2">{row.company}</Typography> */}
                </TableCell>
                
                <TableCell>
                  <Link to={`/${redirect}-update/${model.id}/${model.slug}`}>
                    <Typography 
                    className={classes.status}
                    style={{
                      backgroundColor:"blue",
                      color:"white",
                      padding:'5px'
                    }}
                    >Edit</Typography>
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

        </Table>
      </TableContainer>
      </Paper>

  )}

      
    </div>
  );
};

export default AdminTable;

