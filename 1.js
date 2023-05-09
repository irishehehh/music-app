

const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0bd5428e5cmshedad10aa1f04085p15e03fjsnf103ad97aff4',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
  }
};

fetch(url,options).then((res)=>{
  console.log(res);
})