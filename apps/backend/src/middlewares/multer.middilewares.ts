import multer from "multer";

export const multerUpload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 1024 * 1024 * 20,
    },
});

export const singleUpload=multerUpload.single("image");
export const noUpload=multer().none();
