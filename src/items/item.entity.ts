import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Item {

@PrimaryGeneratedColumn()
id: number;

@Column()
name: string;

@Column()
description: string;

@Column()
price: string;

@Column()
location: string;

@Column()
category: string;
}