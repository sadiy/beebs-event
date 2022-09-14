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

interface ApiNewsRecord {
  datasetid: String;
  recordid: String;
  fields: {
    url: String;
    access_type: String;
    price_type: String;
    tags: String;
    description: String;
    address_zipcode: String;
    lat_lon: Number[];
    contributor_group: String;
    cover_url: String;
    title: String;
    id:String;
    access_link: String;
    address_name: String;
    audience: String;
    price_detail: String;
    address_street: String;
    address_city: String;
    cover_alt: String;
    cover_credit: String;
    updated_at: String;
    lead_text: String;
    contact_url: String;
    image_couverture: {
      id: String;
      mimetype: String;
      height: Number;
      width: Number;
      filename: String;
      thumbnail: Boolean;
      format: String;
      color_summary: String[];
    };
    title_event: String;
  };
  geometry: {
    type: String;
    coordinates: Number[];
  };
  record_timestamp: String;
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

// export the actions
export const { setLoading, setNews, setError } = newsSlice.actions;

export const newsSelector = (state: RootState) => state.news;

export default newsSlice.reducer;
