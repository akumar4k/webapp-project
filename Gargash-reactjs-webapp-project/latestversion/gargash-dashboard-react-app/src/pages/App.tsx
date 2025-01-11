import { Wrapper, Status } from '@googlemaps/react-wrapper';
import '../styles';
import { Auth0Provider } from '@auth0/auth0-react';
import AppRouter from '../routes/AppRouter';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GoogleMapsAPIKey;

function App() {
  const renderMap = (status: Status) => {
    if (status === Status.LOADING) return <h3>{status} ..</h3>;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <></>;
  };

  return (
    <RecoilRoot>
      <RecoilNexus />
      <Auth0Provider
        domain="dev-ncijhftggdhar4tt.uk.auth0.com"
        clientId="Dae8fBV58C6gLou171wFLshGFb97Ezm0"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}>
        <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={renderMap}>
          <AppRouter />
        </Wrapper>
      </Auth0Provider>
    </RecoilRoot>
  );
}

export default App;
