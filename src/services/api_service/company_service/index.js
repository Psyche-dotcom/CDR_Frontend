import { routes } from "../../api_route";
import HttpService from "../../httpServices";
import useMutateItem from "../../useMutateItem";
import useFetchItem from "../../useFetchItem";
import { ErrorHandler } from "../../errorHandler";

const httpService = new HttpService();

export const useGetTrunkUserInfo = ({ enabled = true }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["GetTrunkUserInfo"],
      queryFn: () => {
        return httpService.getData(routes.getTrunkUserInfo());
      },
      enabled,
      retry: 2,
    });

  return {
    getTrunkUserInfoIsFetching: isFetching,
    getTrunkUserInfoIsFetched: isFetched,
    getTrunkUserInfoIsLoading: isLoading,
    getTrunkUserInfoDataError: ErrorHandler(error),
    getTrunkUserInfoData: data?.data || [],
    refreshgetTrunkUserInfoData: refetch,
    getTrunkUserInfoRequest: setFilter,
  };
};
export const useGetUserActiveSub = ({ enabled = true }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["GetUserActiveSub"],
      queryFn: () => {
        return httpService.getData(routes.getActiveSubInfo());
      },
      enabled,
      retry: 2,
    });

  return {
    getUserActiveSubIsFetching: isFetching,
    getUserActiveSubIsFetched: isFetched,
    getUserActiveSubIsLoading: isLoading,
    getUserActiveSubDataError: ErrorHandler(error),
    getUserActiveSubData: data?.data || [],
    refreshGetUserActiveSubData: refetch,
    getUserActiveSubRequest: setFilter,
  };
};

export const useGetUserInfo = ({ enabled = true }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["GetUserInfo"],
      queryFn: () => {
        return httpService.postData("", routes.getUserInfo());
      },
      enabled,
      retry: 2,
    });

  return {
    getUserInfoIsFetching: isFetching,
    getUserInfoIsFetched: isFetched,
    getUserInfoIsLoading: isLoading,
    getUserInfoDataError: ErrorHandler(error),
    getUserInfoData: data?.data || [],
    refreshgetUserInfoData: refetch,
    getUserInfoRequest: setFilter,
  };
};
