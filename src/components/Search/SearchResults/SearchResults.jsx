import SearchList from "../SearchList/SearchList";
import styled from "styled-components";
import SearchFilmItem from "../SearchItem/SearchFilmItem";
import SearchPersonItem from "../SearchItem/SearchPersonItem";
import { UILoader } from "@components/UI";
import { Error } from "@components/Error";

export const SearchResults = ({ loading, data }) => {

     const Results = styled.div`
          display: flex;
          align-items: flex-start;
          column-gap: 30px;
          row-gap: 30px;
          transition: .3s;
     `;

     if ((data.movies && data.persons) && !data.movies?.length && !data.persons?.length) return <Error message="Ничего не найдено"/>;

     if (loading) return <UILoader />;

     return (
          <Results>
               { data.movies?.length ? <SearchList Item={SearchFilmItem} title="Фильмы" data={data.movies}/> : "" }
               { data.persons?.length ? <SearchList Item={SearchPersonItem} title="Люди" data={data.persons}/> : ""}
          </Results>
     )
};

