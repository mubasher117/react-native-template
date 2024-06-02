export interface ForecastDay {
  day: {
    avgtemp_c: string;
    maxtemp_c: string;
    mintemp_c: string;
    condition: {
      icon: string;
    };
  };
  date: string;
}

export interface WeatherDetailProps {
  route: {
    params: {
      weatherDetails: {
        current: {
          feelslike_c: string;
          humidity: string;
          uv: string;
          wind_kph: string;
          vis_km: string;
          pressure_mb: string;
        };
        forecast: {
          forecastday: Array<ForecastDay>;
        };
      };
    };
  };
}

export interface RenderItemType {
  item: ForecastDay;
  index: string;
}
