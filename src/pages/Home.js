import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(214, 176, 255, 0.9385307346326837) 0%,
    rgba(218, 198, 255, 1) 50%,
    rgba(182, 138, 255, 1) 100%
  );
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  // console.log(lat, lon);

  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <Container>
              <Header datas={data} />
              <Section datas={data} />
            </Container>
          )}
        </>
      )}
    </>
  );
};
