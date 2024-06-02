export interface WeatherDataItemProps {
  item: {
    day: {
      avgtemp_c: string;
      maxtemp_c: string;
      mintemp_c: string;
      condition: {
        icon: string;
      };
    };
    date: string;
  };
}
