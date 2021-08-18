interface Results {
  [key:string]: any;
}

interface RouteProps {
  geometry?: boolean,
  itinerary?: boolean,
  altitude?: boolean,
  criterion: 'fast' | 'short' | 'bike1' | 'bike2' | 'bike3' | 'turist1' | 'turist2'
}

export type RouteInfoResultProps = {
  altitude: number[];
  ascent: number;
  descent: number;
  geometry: any[];
  id: string;
  inEurope: boolean;
  points: object[];
  length: number;
  time: number;
  url: string;
};

const getDynamicPath = (results: Results) => {
  const routeInfo = results && results.getResults();
  return routeInfo;
}
               
export const getRouteInfo = async (coords:  Array<{ lng: number, lat: number }>, params: RouteProps) => {
  const routePoints = coords.map(p => window.SMap.Coords.fromWGS84(p.lng, p.lat));

  return window.SMap.Route.route(routePoints, params).then(getDynamicPath);
}
