const { BlobServiceClient } = require('@azure/storage-blob');
const AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING;

// Function to upload a file to Azure Blob Storage
async function uploadFileToBlobStorage(filePath, fileName) {
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);
    const containerClient = blobServiceClient.getContainerClient('training-data');
    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    await blockBlobClient.uploadFile(filePath);
}

module.exports = { uploadFileToBlobStorage };
