import { Base } from "src/base";
import {  MovieResponse, QuoteResponse } from "../core/types";

const resourceName = "movie";

export class Movies extends Base {
  getMovieById(id: string): Promise<MovieResponse> {
    return this.request(`/${resourceName}/${id}`);
  }
  
  getMovieQuotes(id: string): Promise<QuoteResponse> {
    return this.request(`/${resourceName}/${id}/quote`);
  }

  getMovies(): Promise<MovieResponse> {
    return this.request(`/${resourceName}`);
  }
}