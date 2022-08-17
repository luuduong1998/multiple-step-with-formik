import { Typography } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

const PreviewFormValue = () => {
  const { values } = useFormikContext();
  return (
    <Typography sx={{ wordBreak: "break-all" }}>
      {JSON.stringify(values)}
    </Typography>
  );
};

export default PreviewFormValue;
