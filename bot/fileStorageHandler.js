const { BlobServiceClient } = require('@azure/storage-blob');
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

async function uploadFileToBlobStorage(filePath, fileName) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient('training-data');
    
    // Check if the container exists, and create it if it doesn't
    const exists = await containerClient.exists();
    if (!exists) {
        await containerClient.create();
        console.log('Container "training-data" created');
    }

    const blockBlobClient = containerClient.getBlockBlobClient(fileName);
    await blockBlobClient.uploadFile(filePath);
}

module.exports = { uploadFileToBlobStorage };
