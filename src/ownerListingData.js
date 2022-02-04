import axiosWithAuth from "./components/utils/axiosWithAuth";


const dataImport = axiosWithAuth().get(`/item`).then(resp => {

  return ownerListingData.push(...resp.data)
  })
.catch((err) => {
console.log(err.response.data);
});

const ownerListingData = [];


export default ownerListingData;
