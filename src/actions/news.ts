import api from "../api";
import { setNews, setError} from "../slices/news";
import { AppDispatch } from "../store";

export function fetchNews() {
    return async (dispatch: AppDispatch) => {
      api
        .get("/records/1.0/search/?dataset=que-faire-a-paris-&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs")
        .then((response) => {
          dispatch(setNews(response.data));
        })
        .catch((error) => {
          dispatch(setError());
        });
    };
}

export function fetchNewsDetails(newsId: string) {
    return async (dispatch: AppDispatch) => {
        api
          .get(`/records/1.0/search/?dataset=que-faire-a-paris-&q=id=${newsId}&facet=date_start&facet=date_end&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=transport&facet=price_type&facet=access_type&facet=updated_at&facet=programs`)
          .then((response) => {
            dispatch(setNews(response.data));
          })
          .catch((error) => {
            dispatch(setError());
          });
      };
}