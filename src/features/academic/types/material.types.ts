export interface SchoolMaterialItem {
  id: string;
  title: string;
  academicYear: number;
  segment: string;
  grade: string;
  fileUrl: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface MaterialTurma {
  serie: string;
  label: string;
  cor: string;
  bg: string;
  href: string | null;
  id?: string;
}

export interface MaterialGrupo {
  label: string;
  turmas: MaterialTurma[];
}
