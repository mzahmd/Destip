import useGetData from "./useGetData";

interface Application {
  department: string;
  degree: string;
  facultysemester: string;
  userID: string;
}

export default function useApplications() {
  const { data, error, isLoading } = useGetData<Application[]>("applications");

  if (!data || !data.length) {    
    return { data: null, error, isLoading };
  }

  return { data, error, isLoading };
}
