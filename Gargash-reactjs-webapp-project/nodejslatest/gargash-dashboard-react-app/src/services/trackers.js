// const url3 = "https://api.us.navixy.com/v2/vehicle/list?hash="
const hashAccount1 = import.meta.env.VITE_hashAccount1;

const fetchTrackers = async (url) => {
  const response = await fetch(url);
  return response.json();
};

async function getTrackerList() {
  // fetchTrackers(`${url3}${hashAccount1}`)
  //     .then(data1 => {
  //         const array  = data1.list.map(car => car.chassis_number);
  //         console.log(new Set (array))
  //     })

  const url = 'https://api.us.navixy.com/v2/tracker/list?hash=';
  return Promise.all([fetchTrackers(`${url}${hashAccount1}`)])
    .then(([data1]) => {
      return [...data1.list];
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}
export async function fetchData() {
  try {
    return await getTrackerList();
  } catch (error) {
    console.error('Error:', error);
  }
}
