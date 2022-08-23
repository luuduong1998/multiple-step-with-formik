import { Formik } from "formik";
import React, { useCallback } from "react";
import FileUpload from "./components/file-upload";
export const listAcceptFiles = [".csv", ".dbf", ".xls", ".xlsx", ".xlsm"];
const UploadFile = () => {
  const onDrop = useCallback(async (acceptedFiles: any) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output: any = document.getElementById("output");
      output.src = reader.result;
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);
  return (
    <Formik
      initialValues={{}}
      onSubmit={() => {
        return;
      }}
    >
      <FileUpload
        dropzoneOptions={{
          onDrop,
          multiple: true,
        }}
        disableUpload={false}
        fileTypeSupported={listAcceptFiles}
      />
    </Formik>
  );
};

export default UploadFile;
