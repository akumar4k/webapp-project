import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Overview from '../pages/Overview';
import Locations from '../pages/Locations';
import FlexCharts from '../pages/FlexCharts';
import { useRecoilState } from 'recoil';
import { FilterBarMenuItems } from '../data/GlobalStateVars';
import { useEffect } from 'react';
import { getFilterItems } from '../data/GetFiltertems';

function AppRouter() {
  const [, setFilterItems] = useRecoilState(FilterBarMenuItems);
  const DUBAI_COORDINATES = { lat: 25.05775514416599, lng: 55.207773016934475 };

  useEffect(() => {
    setFilterItems(getFilterItems());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Locations center={DUBAI_COORDINATES} zoom={11.8} />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/flexcharts" element={<FlexCharts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
