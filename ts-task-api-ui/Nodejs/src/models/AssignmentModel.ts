import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'assignments',
})
export class Assignments extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  music_genre!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  practice_time!: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  days!: string;
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  days_practiced!: string;
}
