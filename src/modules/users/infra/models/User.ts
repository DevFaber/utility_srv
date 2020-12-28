import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm'

import Company from '../../../companies/infra/models/Company'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  comp_id: string

  @ManyToOne(() => Company, {
    eager: true,
  })
  @JoinColumn({ name: 'comp_id'})
  company: Company

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  phone: string

  @Column('integer')
  type: number

  @Column()
  profile: string


  @Column('boolean')
  is_active: boolean
  
  @Column('boolean')
  is_excluded: boolean  
  
  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at: Date

}

export default User