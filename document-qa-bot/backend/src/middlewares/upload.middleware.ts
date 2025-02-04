import multer from 'multer';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		const formatFileName = file.originalname.split(' ').join('-');
		cb(null, `${Date.now()}-${formatFileName}`);
	},
});

const upload = multer({ storage });

export default upload.single('file');
