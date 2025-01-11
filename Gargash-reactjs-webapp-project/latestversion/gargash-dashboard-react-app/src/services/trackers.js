const url3 = "https://api.us.navixy.com/v2/vehicle/list?hash="
const hashAccount1 = import.meta.env.VITE_hashAccount1;

const fetchTrackers = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export async function getSummaryCount(){
  fetchTrackers(`${url3}${hashAccount1}`)
  .then(data1 => {
      const count = data1.count
      const labelCounts = data1.list.reduce((acc, obj) => {
          const label = ['GAC', "ALFA ROMEO", "MERCEDES"].includes(obj.label) ? obj.label : 'Other';
          acc[label] = (acc[label] || 0) + 1;
          return acc;
      }, {});
      console.log({count : count , labels: labelCounts})
      return {count : count , labels: labelCounts}
  })
}
async function getTrackerList() {
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
