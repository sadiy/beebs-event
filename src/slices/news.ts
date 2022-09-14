import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface NewsState {
  loading: Boolean;
  error: Boolean;
  news: ApiResponse;
}

interface ApiResponse {
  facet_groups?: Object[];
  nhits?: Number;
  parameters?: Object;
  records?: ApiNewsRecord[];
}

export interface ApiNewsRecord {
  datasetid: string;
  recordid: string;
  fields: {
    url: string;
    access_type: string;
    price_type: string;
    tags: string;
    description: string;
    address_zipcode: string;
    lat_lon: number[];
    contributor_group: string;
    cover_url: string;
    title: string;
    id:string;
    access_link: string;
    address_name: string;
    audience: string;
    price_detail: string;
    address_street: string;
    address_city: string;
    cover_alt: string;
    cover_credit: string;
    updated_at: string;
    lead_text: string;
    contact_url: string;
    image_couverture: {
      id: string;
      mimetype: string;
      height: string;
      width: string;
      filename: string;
      thumbnail: boolean;
      format: string;
      color_summary: string[];
    };
    title_event: string;
  };
  geometry: {
    type: string;
    coordinates: number[];
  };
  record_timestamp: string;
}

export const initialState: NewsState = {
  loading: false,
  error: false,
  news: {},
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setNews: (state, action: PayloadAction<ApiResponse>) => {
      state.loading = false;
      state.error = false;
      state.news = action.payload;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setNews, setError } = newsSlice.actions;

export const newsSelector = (state: RootState) => state.news;

export default newsSlice.reducer;
