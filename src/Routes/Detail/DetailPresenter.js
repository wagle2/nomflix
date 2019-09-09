import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import ErrorText from "Components/ErrorText";
import YTLink from "Components/YTLink";

const Container = styled.div`
  position: relative;
  padding: 80px;
  height: 100%;
  width: 100%;
  height: calc(100vh - 45px);
`;

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.bgImage});
  background-size: 100%;
  background-position: center center;
  position: absolute;
  filter: blur(5px);
  top: 0;
  left: 0;
  z-index: 0;
`;
const Content = styled.div`
  position: relative;
  z-index: 9;
  width: 100%;
  min-height: 100%;
  display: flex;
  overflow: scroll;
`;

const Poster = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  border-radius: 7px;
  background-position: center center;
`;

const Data = styled.div`
  color: rgba(255, 255, 255, 0.9);
  margin-left: 20px;
  font-size: 12px;
  width: 70%;
`;

const Name = styled.span`
  font-size: 42px;
  color: white;
`;

const InfoRow = styled.div`
  margin-top: 20px;
`;

const InfoItem = styled.span``;

const Bullet = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  margin-top: 20px;
  margin-bottom: 25px;
  width: 50%;
  line-height: 2;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const CountryName = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;

const CompanyLogoContainer = styled.div`
  display: flex;
`;

const CompanyLogo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${props => props.bgImage});
  background-size: contain;
  border-radius: 7px;
  background-position: center center;
  display: flex;
`;

const PosterContainer = styled.div`
  display:block;
  margin: 0px 10px;
`;

const PosterImg = styled.div`
  display:block;
  width: 100px;
  height: 148px;
  background-image: url(${props => props.bgImage});
  background-size: contain;
  border-radius: 7px;
  background-position: center center;
`;

const PosterName = styled.span`
  margin: 0px 10px;
  font-size: 16px;
`;

const DetailPresenter = ({ loading, result, error }) =>
  loading ? (
    <Loading />
  ) : error ? (
    <ErrorText text={error} />
  ) : (
    <Container>
      <Background
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Poster
          bgImage={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
        />
        <Data>
          <Name>
            {result.original_name
              ? result.original_name
              : result.original_title}
          </Name>
          <InfoRow>
            <InfoItem>
              {result.first_air_date
                ? result.first_air_date.substring(0, 4)
                : result.release_date.substring(0, 4)}
            </InfoItem>
            <Bullet>•</Bullet>
            <InfoItem>
              {result.episode_run_time
                ? result.episode_run_time
                : result.runtime}{" "}
              min
            </InfoItem>
            <Bullet>•</Bullet>
            <InfoItem>
              {result.genres &&
                result.genres.map((genre, index) => {
                  if (index + 1 === result.genres.length) {
                    return genre.name;
                  } else {
                    return `${genre.name} / `;
                  }
                })}
            </InfoItem>
            <Bullet>•</Bullet>
            {result.status && <InfoItem>{result.status}</InfoItem>}
            {result.vote_average && result.vote_average !== 0 ? (
              <>
                <Bullet>•</Bullet>
                <InfoItem>
                  <span role="img" aria-label="rating">
                    ⭐️
                  </span>{" "}
                  {result.vote_average} / 10
                </InfoItem>
              </>
            ) : null}
          </InfoRow>
          {result.overview && <Overview>{result.overview}</Overview>}

          <Title>Production Companies</Title>
          <CompanyLogoContainer>
            {result.production_companies &&
              result.production_companies.map(
                company =>
                  company.logo_path && (
                    <CompanyLogo
                      bgImage={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                    />
                  )
              )}
          </CompanyLogoContainer>
          {result.production_countries && <Title>Production Countries</Title>}
          {result.production_countries &&
            result.production_countries.map(country => (
              <CountryName>• {country.name}</CountryName>
            ))}

          {result.seasons && <Title>Seasons</Title>}
          <CompanyLogoContainer>
            {result.seasons &&
              result.seasons.map(
                season =>
                  season.poster_path && (
                    <PosterContainer>
                      <PosterImg
                        bgImage={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                      />
                      <PosterName>{season.name}</PosterName>
                    </PosterContainer>
                  )
              )}
          </CompanyLogoContainer>

          <Title>🖥YouTube</Title>
          {result.videos &&
            result.videos.results &&
            result.videos.results.map(
              video =>
                video.site === "YouTube" && (
                  <YTLink title={video.name} id={video.key} key={video.id} />
                )
            )}
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.object,
  error: PropTypes.string
};

export default DetailPresenter;
