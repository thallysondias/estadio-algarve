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
  email: string;
  cellphone?: string;
  phone?: string;
  push_token_android?: PushToken[]; // Supondo opcional
  push_token_ios?: PushToken[]; // Supondo opcional
}

export interface UserData {
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
    alreadyEvents: string;
    numberOfParticipants: string;
    interestedInOrganizingEvent: string;
    hotel?: hotel;
    empresa?: empresa;
    produtora?: produtora;
    orgEventos?: orgEventos;
    entPublicas?: entPublicas;
    associacao?: associacao;
    particular?: particular;
    avaliation?: string;
    additionalComments?: string;
  };
}

interface hotel{
  hasSpace: string,
  maxCapacity: number | string,
  wantEvent: string,
  hasInterest: string,
}
interface empresa {
  organizeEvents: string,
  typeOfEvents: string[],
  hasInterest: string,
}
interface produtora {
  organizeEvents: string,
  typeOfEvents: string[],
  numberOfParticipants: string;
  hasInterest: string,
}
interface orgEventos {
  organizeEvents: string,
  typeOfEvents: string[],
  numberOfParticipants: string;
  hasInterest: string,
}
interface entPublicas {
  organizeEvents: string,
  typeOfEvents: string[],
  numberOfParticipants: string;
  hasInterest: string,
}
interface associacao {
  organizeEvents: string,
  typeOfEvents: string[],
  numberOfParticipants: string;
  hasInterest: string,
}
interface particular {
  organizeEvents: string,
  typeOfEvents: string[],
  numberOfParticipants: string;
  hasInterest: string,
}


export interface userNewTag {
  contacts: any[];
  tag_id: number;
}
