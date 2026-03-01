import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitLead() {
    const { actor } = useActor();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: {
            name: string;
            phoneNumber: string;
            email: string;
            address: string;
            installationType: string;
            message: string;
        }) => {
            if (!actor) throw new Error('Backend not available');
            await actor.submitLead(
                data.name,
                data.phoneNumber,
                data.email,
                data.address,
                data.installationType,
                data.message
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['leads'] });
        },
    });
}
