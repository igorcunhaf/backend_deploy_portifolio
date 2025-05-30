import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // Importar o guard

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  // @UseGuards(JwtAuthGuard) // Temporariamente removido para teste
  @Get()
  findAll() {
    return this.contactService.findAll();
  }
}

