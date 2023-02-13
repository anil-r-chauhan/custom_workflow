import { Grid, MenuItem } from "@material-ui/core";
import {
  Autocomplete,
  TextField,
  Divider,
  Typography,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
  Switch,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function NewWorkFlow(props) {
  console.log(props);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.data);
  }, props.data.Rules);

  const handleSelelctChange = (e, value) => {
    console.log(e.target.name, value, "select");
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value, "input");
  };

  const getField = (cell) => {
    if (cell.condition_type === "in") {
      return (
        <Autocomplete
          options={cell.options || []}
          value={cell.values || []}
          onChange={(event, value) => handleSelelctChange(event, value)}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          multiple
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label={`Select ${cell.label}`}
              fullWidth
              name={cell.id}
            />
          )}
        />
      );
    } else if (cell.condition_type === "equal") {
      return (
        <TextField
          className="local_template_textfield"
          fullWidth
          variant="outlined"
          label={cell.label}
          onChange={(event) => handleChange(event)}
          type="text"
          name={cell.id}
          onBlur={(e) => {
            this.handleChange(e, cell.FieldId);
            // this.validateInput(cell.FieldId);
          }}
        />
      );
    }
  };

  const getLevel = (cell)=>{
  return <Typography>{cell.level}</Typography>
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          // padding: "10px",
          padding: "0 10px",
          backgroundColor: "#F6F8FB",
          // border: "1px solid black",
          // borderRadius: "5px",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {/* header component  */}
          <Grid item sm={12} md={12} lg={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                padding: "10px",
              }}
            >
              <Box>
                <Typography
                  sx={{ fontWeight: "bold", textTransform: "upperCase" }}
                >
                  WorkFlow
                </Typography>
              </Box>
              <Box>
                <Button variant="outlined" sx={{ marginRight: "10px" }}>
                  Cancle
                </Button>
                <Button variant="contained">Submit</Button>
              </Box>
            </Box>
          </Grid>
          {/* work flow component */}
          <Grid item sm={8} md={8} lg={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid 	#E0E0E0",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item sm={6} md={6} lg={6}>
                  <TextField
                    className="workflow_title"
                    fullWidth
                    variant="outlined"
                    label={"Workflow Title"}
                    defaultValue="PP Bags Flow"
                    onChange={(event) => handleChange(event)}
                    type="text"
                    name={"workflow_title"}
                    // onBlur={(e) => {
                    //   this.handleChange(e, cell.FieldId);
                    //   // this.validateInput(cell.FieldId);
                    // }}
                  />
                </Grid>
                <Grid item sm={6} md={6} lg={6}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <FormControlLabel
                      value="Active"
                      control={<Switch color="primary" />}
                      label="Active"
                      labelPlacement="start"
                    />
                  </Box>
                </Grid>
                <Divider style={{ width: "100%" }} />
                <Grid item sm={4} md={4} lg={4}>
                  <TextField
                    className="company_name"
                    fullWidth
                    defaultValue="Ahm_Vendx_Live"
                    variant="outlined"
                    label={"Company Name"}
                    onChange={(event) => handleChange(event)}
                    type="text"
                    name={"company_name"}
                    // onBlur={(e) => {
                    //   this.handleChange(e, cell.FieldId);
                    //   // this.validateInput(cell.FieldId);
                    // }}
                  />
                </Grid>
                <Grid item sm={4} md={4} lg={4}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    //  error={error}
                  >
                    <InputLabel>Document</InputLabel>
                    <Select
                      fullWidth
                      // title={value}
                      className="document_dropdown"
                      label={"Document"}
                      name={"document"}
                      value={"PO Line Item"}
                      // onChange={(e) => {
                      //   this.handleIntlChange(e, cell.FieldId);
                      // }}
                      // onBlur={(e) => {
                      //   this.validateInputINTL(cell.FieldId);
                      // }}
                      // MenuProps = {{
                      //   PaperProps: {
                      //     style: {
                      //       maxHeight: 250,
                      //       width: 250
                      //     }
                      //   }
                      // }}
                    >
                      <MenuItem value="">Select</MenuItem>
                      <MenuItem value="PO Line Item">PO Line Item</MenuItem>
                      {/* {
            document_dropdown["options"].map(
              (option, id) => {
                return (
                  <MenuItem
                    key={id}
                    value={
                     option.value
                    }
                  >
                    <Typography style={{ whiteSpace: "pre-line" }}>
                      {option.value}
                    </Typography>
                  </MenuItem>
                );
              }
            )
          } */}
                    </Select>
                    {/* {error && <FormHelperText>{ErrorMessage}</FormHelperText>} */}
                  </FormControl>
                </Grid>
                <Grid item sm={12} md={12} lg={12}>
                  <TextField
                    className="discription"
                    fullWidth
                    defaultValue="Lorem ipsum dolor "
                    variant="outlined"
                    label={"Description"}
                    // onChange={(event) => handleChange(event)}
                    type="text"
                    name={"discription"}
                    placeholder="Add Description here"
                    multiline
                    maxRows={4}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* <Divider style={{ width: "100%" }} /> */}
          <Grid item sm={8} md={8} lg={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid 	#E0E0E0",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item sm={12} md={12} lg={12}>
                  <Typography
                    sx={{ fontWeight: "bold", textTransform: "upperCase" }}
                  >
                    Rules
                  </Typography>
                </Grid>
                <Divider style={{ width: "100%" }} />
                {data?.Rules?.map((cell, i) => {
                  const field = getField(cell);
                  if (field && cell.visible === true) {
                    if (cell.condition_type === "equal") {
                      return (
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} key={i}>
                          {field}
                        </Grid>
                      );
                    }
                    return (
                      <Grid
                        item
                        xl={12}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        key={i}
                      >
                        {field}
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Box>
          </Grid>
          {/* level Component  */}
          <Grid item sm={8} md={8} lg={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid 	#E0E0E0",
                borderRadius: "5px",
                padding: "20px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item sm={12} md={12} lg={12}>
                  <Typography
                    sx={{ fontWeight: "bold", textTransform: "upperCase" }}
                  >
                    Levels
                  </Typography>
                </Grid>
                <Divider style={{ width: "100%" }} />
                {data?.Levels?.map((cell, i) => {
                  const level = getLevel(cell);
                  // if (field && cell.visible === true) {
                  //   if (cell.condition_type === "equal") {
                      return (
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} key={i}>
                          {level}
                        </Grid>
                      );
                  //   }
                  //   return (
                  //     <Grid
                  //       item
                  //       xl={12}
                  //       lg={12}
                  //       md={12}
                  //       sm={12}
                  //       xs={12}
                  //       key={i}
                  //     >
                  //       {field}
                  //     </Grid>
                  //   );
                  // }
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default NewWorkFlow;
