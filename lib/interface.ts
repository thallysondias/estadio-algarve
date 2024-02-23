interface PushToken {
  app_id: string;
  token: string;
}

interface ExtraField {
  field_id: number;
  format?: string;
  value: string | number[] | number;
}
interface BaseInfo {
  contact_id?: string; // Agora é opcional
  status?: string;
  first_name?: string;
  last_name?: string;
  birth_date?: string; // Supondo que este também possa ser opcional
  language?: string;
  email?: string;
  cellphone?: string;
  phone?: string;
  push_token_android?: PushToken[]; // Supondo opcional
  push_token_ios?: PushToken[]; // Supondo opcional
}

export interface UserData {
  type?: string;
  contacts?: string[];
  base: BaseInfo;
  extra?: ExtraField[];
}

export interface InquiryFormProps {
  nextStep?: () => void;
  prevStep?: () => void;
  handleChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  formData: {
    entity: string | number;
    entityName: string;
    position: string;
    personalName: string;
    cellphone: string;
    postalCode: string;
    alreadyEvents: number;
    numberOfParticipants: number;
    interestedInOrganizingEvent: number;
    hotel?: hotel;
    empresa?: empresa;
    produtora?: produtora;
    orgEventos?: orgEventos;
    entPublicas?: entPublicas;
    associacao?: associacao;
    particular?: particular;
    avaliation?: string | number;
    additionalComments?: string;
  };
}

interface hotel{
  hasSpace: number,
  maxCapacity: number | string,
  wantEvent: number,
  hasInterest: number,
}
interface empresa {
  organizeEvents: number,
  typeOfEvents: any[],
  hasInterest: number,
}
interface produtora {
  organizeEvents: number,
  typeOfEvents: any[],
  numberOfParticipants: number;
  hasInterest: number,
}
interface orgEventos {
  organizeEvents: number,
  typeOfEvents: any[],
  numberOfParticipants: number;
  hasInterest: number,
}
interface entPublicas {
  organizeEvents: number,
  typeOfEvents: any[],
  numberOfParticipants: number;
  hasInterest: number,
}
interface associacao {
  organizeEvents: number,
  typeOfEvents: any[],
  numberOfParticipants: number;
  hasInterest: number,
}
interface particular {
  organizeEvents: number,
  typeOfEvents: any[],
  numberOfParticipants: number;
  hasInterest: number,
}


export interface userNewTag {
  contacts: any[];
  tag_id: number;
}
