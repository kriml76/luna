import { Magnus, MagnusBase, Query, Mutation } from '@notadd/magnus-core'
import { Member } from './member';
import { getRepository, Repository } from 'typeorm';
@Magnus({
    entities: [
        Member
    ]
})
export class Controller<T> extends MagnusBase<T> {
    get repository(): Repository<T> {
        return getRepository(this.tablename)
    }
    @Query()
    get(entity: Partial<T>): Promise<T> {
        return this.repository.findOneOrFail({
            where: entity
        });
    }

    @Mutation()
    save(entity: T): Promise<T> {
        return this.repository.save(entity);
    }
}