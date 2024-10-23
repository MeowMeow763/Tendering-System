import web3 from './web3';
import TenderSystemABI from './TenderSystemABI.json'; // Ensure this path is correct

const contractAddress = '0xYourContractAddressHere'; // Replace with your contract's address

const tenderSystem = new web3.eth.Contract(TenderSystemABI, contractAddress);

export default tenderSystem;
