import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  city: string;
  systemSize: string;
  message: string;
}

export function useSubmitLead() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: LeadData) => {
      if (!actor) throw new Error('Actor not available');
      await actor.submitLead(
        data.name,
        data.phone,
        data.email,
        data.city,
        data.systemSize,
        data.message
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['leads'] });
    },
  });
}
