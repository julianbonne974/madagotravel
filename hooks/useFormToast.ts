import { toast } from "sonner"

export function useFormToast() {
  const showInfo = (message: string) => {
    return toast.info(message, {
      duration: Infinity,
    })
  }

  const showSuccess = (message: string) => {
    toast.success(message, {
      duration: 5000,
    })
  }

  const showError = (message: string, phone?: string) => {
    toast.error(message, {
      duration: 8000,
      description: phone ? `Vous pouvez nous contacter au ${phone}` : undefined,
    })
  }

  return { showInfo, showSuccess, showError }
}
