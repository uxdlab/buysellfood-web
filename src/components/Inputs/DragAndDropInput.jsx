import React, { useEffect, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import style from "./input.module.css";
import { Button } from '../Buttons/Button';
import { Add, Close, CloudUpload } from '@mui/icons-material';

export const DragAndDropInput = ({
    className, error, required, fileLimit, label, onChange, value, setDeleted, disabled, acceptedFileTypes
}) => {
    const [files, setFiles] = useState([...value]);

    useEffect(() => {
        setFiles([...value]);
    }, [value]);

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
            alert("Invalid file type. Please upload a valid file.");
            return;
        }
        if (fileLimit < (files.length + acceptedFiles.length)) {
            alert(`You can upload only ${fileLimit} file`);
            return;
        }
        if (disabled) return;

        const newFiles = [
            ...files,
            ...acceptedFiles.map((file) => ({
                file: file,
                fileUrl: URL.createObjectURL(file),
                fileName: file.name
            }))
        ];

        setFiles(newFiles);
        onChange(newFiles); // Call onChange only once files are set
    }, [files, fileLimit, disabled, onChange]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: acceptedFileTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
        onDrop,
    });

    const removeImage = useCallback((event, file, ind) => {
        event.stopPropagation();
        if (!file.file) {
            setDeleted && setDeleted(prev => [...prev, file.fileName]);
        }
        const updatedFiles = files.filter((_, index) => index !== ind);
        setFiles(updatedFiles);
        onChange(updatedFiles); // Call onChange after removing the image
    }, [files, onChange, setDeleted]);

    return (
        <>
          
            <div>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <div
                        className={`${style.dragAndDrop_main_con} ${className}`}
                        style={{ borderColor: error ? "red" : "#d3d3d3" }}
                    >
                        {files.length === 0 ? (
                            <div className='h-100 mt-4'>
                                <div className='d-flex flex-column align-items-center'>

                                    <CloudUpload />
                                    <p className={style.browse_text}>Browse and choose the video you want to upload from your computer</p>
                                    <Button type="button" primary title={<Add />} />
                                    <br/>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex flex-wrap gap-3 p-3">
                                {files.map((file, index) => (
                                    <div className={`${style.drop_image_con} p-2`} key={index}>
                                        {!disabled && (
                                            <div onClick={(e) => removeImage(e, file, index)} className={`${style.drop_remove_icon}`}>
                                                <Close />
                                            </div>
                                        )}
                                        <div className="image-container">
                                            {file?.fileName?.length > 8
                                                ? file.fileName.substr(0, 8) + "..."
                                                : file.fileName}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
