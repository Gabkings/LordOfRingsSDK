export declare type Movie = {
    _id: string;
    name: string;
    runtimeInMinutes: number;
    budgetInMillions: number;
    boxOfficeRevenueInMillions: number;
    academyAwardNominations: number;
    academyAwardWins: number;
    rottenTomatoesScore: number;
  };

export declare type MovieResponse = {
    docs : [Movie];
    total: number,
    offset: number,
    page: number,
    limit: number,
    pages: number
}

export declare type Quote = {
  _id: string,
  dialog: string,
  movie: string,
  character: string,
  id: string
};

export declare type QuoteResponse = {
    docs : [Quote];
    total: number,
    offset: number,
    page: number,
    limit: number,
    pages: number
}
