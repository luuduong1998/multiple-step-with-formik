import { Formik } from 'formik';
import { useCallback } from 'react';
import FileUpload from './components/file-upload';

export const listAcceptFiles = ['.csv', '.dbf', '.xls', '.xlsx', '.xlsm'];
const UploadFile = () => {
  const onDrop = useCallback(async (acceptedFiles: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      const output: any = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
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
