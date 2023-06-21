import { Base } from "src/base";
import { QuoteResponse } from "src/core/types";


const resourceName = "quote";

export class Quotes extends Base {
  getQuoteById(id: string): Promise<QuoteResponse> {
    return this.request(`/${resourceName}/${id}`);
  }
  
  getQoutes(): Promise<QuoteResponse> {
    return this.request(`/${resourceName}`);
  }
}