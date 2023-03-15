import { Column, Table, Model } from 'sequelize-typescript';

@Table
export class Cities extends Model<Cities> {
  @Column
  ville_departement: number;

  @Column
  ville_nom: string;

  @Column
  ville_code_postal: number;

  @Column
  ville_population_1999: number;

  @Column
  ville_population_2010: number;

  @Column
  ville_population_2012: number;
}
