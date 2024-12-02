const { Storage } = require('@google-cloud/storage');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');


const getGCPCredentials = () => {
  return process.env.GCP_PRIVATE_KEY
    ? {
        credentials: {
          client_email: process.env.GCP_SERVICE_ACCOUNT_EMAIL,
          private_key: process.env.GCP_PRIVATE_KEY,
        },
        projectId: process.env.GCP_PROJECT_ID,
      }
    : {};
};

const storage = new Storage(getGCPCredentials());

// Set up multer middleware to handle file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Invalid file type'));
    }
    cb(null, true);
  },
});

// Route handler to handle file uploads


async function listBucketContents(bucketName) {
  const [files] = await storage.bucket(bucketName).getFiles();

  console.log(`Files in bucket ${bucketName}:`);
  files.forEach(file => {
    console.log(file.name);
  });
}

// Replace 'your-bucket-name' with the name of your bucket.
listBucketContents('styleme-solo');

const uploadFile = async (req, res, next) => { 
  try {
    const bucketName = 'styleme-solo';
    const filename = `${Date.now()}-${path.basename(req.file.originalname)}`;
    const file = storage.bucket(bucketName).file(filename);
    const stream = file.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });
    stream.on('error', (error) => {
      console.error('Error uploading file', error);
      next(error);
    });
    stream.on('finish', async () => {
      const url = `https://storage.googleapis.com/${bucketName}/${filename}`;
      console.log('File uploaded successfully', url);
      // save the url in your database here
      res.send({ url });
    });
    stream.end(req.file.buffer);
  } catch (error) {
    console.error('Error uploading file', error);
    next(error);
  }
}





module.exports = {
  upload,
  uploadFile,
}