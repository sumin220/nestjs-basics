import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { Director } from './entity/director.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director) private readonly directorRepository: Repository<Director>,
  ) {
  }
  
  create(createDirectorDto: CreateDirectorDto) {
    return this.directorRepository.save(createDirectorDto);
  }

  findAll() {
    return this.directorRepository.find();
  }

  findOne(id: number) {
    return this.directorRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateDirectorDto: UpdateDirectorDto) {
    const director = await this.directorRepository.findOne({
      where: {
        id: id,
      }
    })

    if (!director) {
      throw new NotFoundException(`Director with ID ${id} not found`);
    }
    await this.directorRepository.update({
      id,
    },
      {
        ...updateDirectorDto,
      })

    const newDirector = await this.directorRepository.findOne({
      where: {
        id: id,
      }
    })

    return newDirector;
  }

  async remove(id: number) {

    const director = await this.directorRepository.findOne({
      where: {
        id: id,
      }
    })

    if (!director) {
      throw new NotFoundException(`Director with ID ${id} not found`);
    }
    await this.directorRepository.delete({
      id,
    })
    return id;
  }
}
