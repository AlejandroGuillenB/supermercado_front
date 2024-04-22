export type User = {
  name: string;
  pass: string;
};

export type NewUser = User & {
  name: string;
};

export type UserBasicInfo = {
  userId: number;
  username: string;
  password: string;
};

export type UserProfileData = {
  id: number;
  username: string;
  rol: number;
  empleado: {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    fecha_nac: Date;
    tipo_doc: string;
    nro_doc: string;
    cuil: string;
    direccion: string;
    nro_tel_princ: string;
    nro_tel_sec: string;
    email: string;
    cargo: string;
    antiguedad: string;
    fecha_ingreso: Date;
    salario_anual: number;
  };
};

export type AuthApiState = {
  basicUserInfo?: UserBasicInfo | null;
  userProfileData?: UserProfileData | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
};

export type Cliente = {
  id: number;
  nombre: string;
  apellido: string;
  tipo_doc: string;
  nro_doc: string;
  nro_tel_princ: string;
  nro_tel_sec: string;
  email: string;
};
