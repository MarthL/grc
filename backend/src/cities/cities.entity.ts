import { Column, Table } from 'sequelize-typescript';

@Table
class Cities {
  @Column
  ville_id: number;

  @Column
  ville_departement: number;

  @Column
  ville_nom: string;

  @Column
  ville_code_postal: number;
}

export default Cities;
