import { routes } from "../../api_route";
import HttpService from "../../httpServices";
import useFetchItem from "../../useFetchItem";
import { ErrorHandler } from "../../errorHandler";

const httpService = new HttpService();

export const useGetWindowDownloadFile = ({ enabled = false }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["GetWindowDownloadFile"],
      queryFn: () => {
        return httpService.getData(routes.windowDownloadUrl());
      },
      enabled,
      retry: 2,
    });

  return {
    getWindowDownloadFileIsFetching: isFetching,
    getWindowDownloadFileIsFetched: isFetched,
    getWindowDownloadFileIsLoading: isLoading,
    getWindowDownloadFileDataError: ErrorHandler(error),
    getWindowDownloadFileData: data?.data || [],
    refreshgetWindowDownloadFileData: refetch,
    getWindowDownloadFileRequest: setFilter,
  };
};

export const useGetDebianDownloadFile = ({ enabled = false }) => {
  const { isFetched, isLoading, error, data, refetch, isFetching, setFilter } =
    useFetchItem({
      queryKey: ["GetDebianDownloadFile"],
      queryFn: () => {
        return httpService.getData(routes.debianDownloadUrl());
      },
      enabled,
      retry: 2,
    });

  return {
    getDebianDownloadFileIsFetching: isFetching,
    getDebianDownloadFileIsFetched: isFetched,
    getDebianDownloadFileIsLoading: isLoading,
    getDebianDownloadFileDataError: ErrorHandler(error),
    getDebianDownloadFileData: data?.data || [],
    refreshgetDebianDownloadFileData: refetch,
    getDebianDownloadFileRequest: setFilter,
  };
};
