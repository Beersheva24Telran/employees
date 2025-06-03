import { MutationFunction, useMutation, useQueryClient } from "@tanstack/react-query";

export default function useEmployeesMutation(mutationFn: MutationFunction) {
    const queryClient = useQueryClient();
 return useMutation({
    mutationFn,
    onSuccess: (__) => queryClient.invalidateQueries({queryKey:["employees"]})
 })
}