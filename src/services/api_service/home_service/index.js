import { routes } from "../../api_route";
import HttpService from "../../httpServices";
import useMutateItem from "../../useMutateItem";
import useFetchItem from "../../useFetchItem";
import { ErrorHandler } from "../../errorHandler";

const httpService = new HttpService();

export const useGetAllPricing = ({ enabled = true }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["GetAllPricing"],
      queryFn: () => {
        return httpService.getDataWithoutToken(routes.getAllPricing());
      },
      enabled,
      retry: 2,
    });

  return {
    getAllPricingIsFetching: isFetching,
    getAllPricingIsFetched: isFetched,
    getAllPricingIsLoading: isLoading,
    getAllPricingDataError: ErrorHandler(error),
    getAllPricingData: data?.data || [],
    refreshgetAllPricingData: refetch,
    getAllPricingRequest: setFilter,
  };
};
