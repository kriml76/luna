import { RoomType } from "./roomType";
import { Entity, Column, ManyToOne, OneToMany, ManyToMany, JoinTable, PrimaryGeneratedColumn, CreateDateColumn, getRepository } from "typeorm";
import { Member } from "./member";
import { GameLog } from './gameLog';
import { JoinColumn } from "@notadd/magnus-typeorm";
import { RoomLimit } from "./roomLimit";
import * as transformer from './transformer'

@Entity()
export class Room {

    /**
     * 房间名称
     */
    @Column()
    title: string;

    /**
     * 隐藏房间
     */
    @Column()
    isHidden: boolean;
    /**
     * id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * 房间密码
     */
    @Column()
    password: string;

    /**
     * 开始方式
     */
    @Column()
    startType: string;

    /**
     * 房间类型、场地选择
     */
    @ManyToOne(() => RoomType, type => type.rooms)
    roomType: RoomType;

    /**
     * 段位限制
     */
    @ManyToOne(() => RoomLimit, type => type.rooms)
    roomLimit: RoomLimit;

    @Column()
    roomTypeId: number;

    /**
     * 房主
     */
    @ManyToOne(() => Member, type => type.createRooms)
    @JoinColumn({
        name: 'owner_id'
    })
    owner: Member;
    /**
     * 房主id
     */
    @Column({
        name: 'owner_id'
    })
    ownerId: number;

    /**
     * 加入房间的人
     */
    @ManyToMany(() => Member, type => type.rooms)
    @JoinTable({
        name: 'room_member',
    })
    members: Member[];

    /**
     * 游戏记录
     */
    @OneToMany(() => GameLog, type => type.room)
    gameLogs: GameLog[];

    /**
     * 提现时间
     */
    @CreateDateColumn({
        name: 'create_date',
        type: 'timestamptz',
        transformer: transformer.timestamptz
    })
    createDate: string;
}