import HttpService from "../../httpServices";
import useMutateItem from "../../useMutateItem";

import { ErrorHandler } from "../../errorHandler";

const httpService = new HttpService();

export const useMutatePostWithoutTokenRequest = (handleSuccess) => {
  const { data, error, isPending, mutate } = useMutateItem({
    mutationFn: ({ payload, route }) =>
      httpService.postDataWithoutToken(payload, route),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};
      console.log(resData);
      handleSuccess(resData);
    },
  });

  return {
    responseData: data,
    responseError: ErrorHandler(error),
    responseIsLoading: isPending,
    requestPayload: (requestPayload) => mutate(requestPayload),
  };
};

export const useMutatePostWithTokenRequest = (handleSuccess) => {
  const { data, error, isPending, mutate } = useMutateItem({
    mutationFn: ({ payload, route }) => httpService.postData(payload, route),
    onSuccess: (requestParams) => {
      const resData = requestParams?.data || {};
      handleSuccess(resData);
    },
  });

  return {
    responseData: data,
    responseError: ErrorHandler(error),
    responseIsLoading: isPending,
    requestPayload: (requestPayload) => mutate(requestPayload),
  };
};
