import axiosWithAuth from "./components/utils/axiosWithAuth";

const ownerListingData = [];

axiosWithAuth().get(`/item`).then(resp => {

  console.log(resp.data);
  
  return ownerListingData.push(resp.data);
  // export
  
  
  
})
.catch((err) => {
  console.log(err.response.data);
});


// console.log(dataImport);

// console.log(ownerListingData);

export default ownerListingData;

