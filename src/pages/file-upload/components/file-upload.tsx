/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

type UploadFileProps = {
  disableUpload: boolean;
  dropzoneOptions: DropzoneOptions;
  fileTypeSupported?: string[];
  title?: ReactNode;
  subTitle?: string;
};

const FileUpload = ({
  disableUpload,
  dropzoneOptions,
  title,
  subTitle,
  fileTypeSupported,
}: UploadFileProps) => {
  const { getInputProps, getRootProps, open } = useDropzone(dropzoneOptions);
  const rootProps = disableUpload
    ? {}
    : getRootProps({ className: 'dropzone' });
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 3,
        maxHeight: { xs: 210 },
        textAlign: 'center',

        cursor: () => (disableUpload ? 'not-allowed' : 'pointer'),
      }}
      component="div"
      onClick={open}
      {...rootProps}
      mt={3}
    >
      <CloudUploadIcon sx={{ fontSize: 40, mt: 1, mb: 1 }} />

      <Typography variant="subtitle1">
        {title || (
          <>
            Drag and drop file here or{' '}
            <Typography component="span" color="primary" variant="h5">
              Browse File{' '}
            </Typography>
            from your computer
          </>
        )}
      </Typography>

      <Box paddingBottom={1}>
        <Typography variant="caption" color="text.secondary">
          {subTitle || `Formats accepted: ${fileTypeSupported?.toString()}`}
        </Typography>
      </Box>

      <input
        {...getInputProps()}
        type="file"
        hidden
        id="file-upload"
        style={{ display: 'none' }}
        disabled={disableUpload}
      />
      <img id="output" />
    </Box>
  );
};

export default FileUpload;
