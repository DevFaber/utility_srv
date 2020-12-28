import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Generated, CreateDateColumn, UpdateDateColumn
} from 'typeorm'

import User from '../../../users/infra/models/User'

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('int')
  @Generated('increment')
  code: number

  @Column()
  razao: string

  @Column()
  fantasia: string

  @Column()
  cnpj: string

  @Column({ length: 250})
  address: string

  @Column({ length: 100})
  neighborhood: string

  @Column({ length: 50})
  city: string

  @Column({ length: 2})
  uf: string

  @Column({ length: 30})
  cep: string

  @Column()
  email: string

  @Column('int')
  type: number

  @Column()
  fone: string

  @Column('boolean')
  active: boolean
  
  @Column('boolean')
  is_excluded: boolean

  @OneToMany(() => User, users => users.comp_id) 
  users: User
  
  @CreateDateColumn()
  created_at: Date
  
  @UpdateDateColumn()
  updated_at: Date

}

export default Company