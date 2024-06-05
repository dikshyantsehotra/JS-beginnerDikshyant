// 1. Create a variable to hold your NFTs
let nfts = [];

// 2. Function to mint a new NFT
function mintNFT(name, description, image) {
    // Create an NFT object with the metadata
    const nft = {
        name: name,
        description: description,
        image: image
    };
    // Store the NFT in the array
    nfts.push(nft);
}

// 3. Function to list all NFTs
function listNFTs() {
    // Loop through the array of NFTs and print their metadata
    for (let i = 0; i < nfts.length; i++) {
        console.log("Name: " + nfts[i].name);
        console.log("Description: " + nfts[i].description);
        console.log("Image: " + nfts[i].image);
        console.log("-------------------");
    }
}

// 4. Function to get the total supply of NFTs
function getTotalSupply() {
    return nfts.length;
}

// Call the functions below this line

// Minting some NFTs
mintNFT("NFT One", "This is the first NFT", "image1.png");
mintNFT("NFT Two", "This is the second NFT", "image2.png");
mintNFT("NFT Three", "This is the third NFT", "image3.png");

// Listing all NFTs
listNFTs();

// Printing the total supply of NFTs
console.log("Total Supply: " + getTotalSupply());
