interface PushToken {
  app_id: string;
  token: string;
}

interface ExtraField {
  field_id: number;
  format: string;
  value: string;
}
interface BaseInfo {
  contact_id?: string; // Agora é opcional
  status: string;
  first_name: string;
  last_name: string;
  birth_date?: string; // Supondo que este também possa ser opcional
  language?: string;
  email: string;
  cellphone?: string;
  phone?: string;
  push_token_android?: PushToken[]; // Supondo opcional
  push_token_ios?: PushToken[]; // Supondo opcional
}

export interface UserData {
  base: BaseInfo;
  extra: ExtraField[];
}

export interface InquiryFormProps {
  nextStep?: () => void;
  prevStep?: () => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => void;
  formData: {
    entity: string[];
    jaFezEventos: string;
    numeroDeParticipantes: string;
    temInteresseEmFazerEvento: string;
  };
}
