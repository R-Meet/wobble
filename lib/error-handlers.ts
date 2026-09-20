import { AxiosError } from "axios";
import { toast } from "sonner";

/**
 * Extracts and displays the error message from an API failure via a toast notification.
 */
export const handleApiError = (error: unknown, fallbackMessage = "An unexpected error occurred.") => {
  let message = fallbackMessage;

  if (error instanceof AxiosError) {
    // Attempt to extract the error message from the backend response
    message = error.response?.data?.message || error.response?.data?.error || error.message || message;
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  }

  toast.error(message);
};

/**
 * A higher-order function that wraps async API calls in a try-catch block,
 * automatically handling errors and displaying a toast notification.
 * 
 * @param apiCall The async function to wrap.
 * @returns A wrapped function that returns the data on success, or null if an error occurs.
 */
export const withErrorHandling = <T, Args extends any[]>(
  apiCall: (...args: Args) => Promise<T>
) => {
  return async (...args: Args): Promise<T | null> => {
    try {
      return await apiCall(...args);
    } catch (error) {
      handleApiError(error);
      return null; // or you could throw error if you still need it upstream
    }
  };
};